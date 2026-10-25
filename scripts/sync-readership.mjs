#!/usr/bin/env node
/**
 * Read-only GA4 aggregate export for the public Evidence to Decision website.
 * Credentials are only ever read from GitHub Actions Secrets; never written.
 */
import {createPrivateKey, sign} from 'node:crypto';
import {writeFile, mkdir} from 'node:fs/promises';
const ID = process.env.GA4_PROPERTY_ID;
const secret = process.env.GA4_SERVICE_ACCOUNT_JSON;
if (!/^\d{5,20}$/.test(ID || '')) throw Error('Set a valid numeric GA4_PROPERTY_ID in the readership-sync workflow (not the G- measurement ID).');
if (!secret) throw Error('Set the GA4_SERVICE_ACCOUNT_JSON GitHub Actions secret (read-only service account).');
let serviceAccount;
try { serviceAccount = JSON.parse(secret); } catch {throw Error('GA4_SERVICE_ACCOUNT_JSON must be valid JSON.');}
if (!serviceAccount.client_email || !serviceAccount.private_key) throw Error('Service account credentials are incomplete.');
const b64 = (v) => Buffer.from(typeof v === 'string' ? v : JSON.stringify(v)).toString('base64url');
const now = Math.floor(Date.now()/1000);
const assertionPayload = {
 iss: serviceAccount.client_email,
 scope: 'https://www.googleapis.com/auth/analytics.readonly',
 aud: 'https://oauth2.googleapis.com/token',
 iat: now,
 exp: now+3300
};
const unsigned = b64({alg:'RS256',typ:'JWT'})+'.'+b64(assertionPayload);
const key=createPrivateKey(serviceAccount.private_key);
const assertion=unsigned+'.'+sign('RSA-SHA256',Buffer.from(unsigned),key).toString('base64url');
const tokenResponse=await fetch('https://oauth2.googleapis.com/token',{
 method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},
 body:new URLSearchParams({grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',assertion})
});
if(!tokenResponse.ok) throw Error('Could not authorize read-only Google service account. HTTP '+tokenResponse.status);
const tokenJson=await tokenResponse.json();
const accessToken=tokenJson.access_token;
if (!accessToken) throw Error('Google returned no access token.');
async function report(dimensions, metrics) {
 const request={
   dateRanges:[{startDate:'2026-10-24',endDate:'yesterday'}],
   dimensions: dimensions.map(name=>({name})),
   metrics: metrics.map(name=>({name})),
   limit:'100000'
 };
 const res=await fetch('https://analyticsdata.googleapis.com/v1beta/properties/'+ID+':runReport',{
  method:'POST',headers:{Authorization:'Bearer '+accessToken,'Content-Type':'application/json'},
  body:JSON.stringify(request)
 });
 if(!res.ok){
  const error=await res.text();
  // Do not output tokens or service credentials.
  throw Error('GA4 Data API request failed (HTTP '+res.status+'): '+error.slice(0,800));
 }
 const json=await res.json();
 if((json.rowCount||0)>100000) throw Error('The GA4 result exceeded the 100,000-row safety limit; output not written.');
 return json.rows||[];
}
function cleanInt(v){const n=Number(v);return Number.isFinite(n)&&n>=0?Math.round(n):0;}
const [overall,byPage,byCountry]=await Promise.all([
  report([],['screenPageViews','activeUsers']),
  report(['unifiedPagePathScreen'],['screenPageViews']),
  report(['countryId','country'],['screenPageViews','activeUsers'])
]);
const totalRow=overall[0];
const totals={
 views:cleanInt(totalRow?.metricValues?.[0]?.value||0),
 activeUsers:cleanInt(totalRow?.metricValues?.[1]?.value||0)
};
const pages=byPage.map(r=>({
 path:r.dimensionValues?.[0]?.value||'',
 views:cleanInt(r.metricValues?.[0]?.value)
})).filter(r=>/^\/essays\/[a-z0-9-]+\/$/.test(r.path)).sort((a,b)=>b.views-a.views);
const countries=byCountry.map(r=>({
 code:(r.dimensionValues?.[0]?.value||'').toUpperCase(),
 name:r.dimensionValues?.[1]?.value||'',
 views:cleanInt(r.metricValues?.[0]?.value),
 activeUsers:cleanInt(r.metricValues?.[1]?.value)
})).filter(r=>/^[A-Z]{2}$/.test(r.code)&&r.views>0).sort((a,b)=>b.views-a.views);
// Compute property-local yesterday. Cron runs at 11:17 UTC, away from midnight US Central.
const chicagoDay=new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'America/Chicago'}).format(new Date());
const yesterday=new Date(chicagoDay+'T12:00:00Z');
yesterday.setUTCDate(yesterday.getUTCDate()-1);
const through=yesterday.toISOString().slice(0,10);
const output={
 status:'ready',
 source:'Google Analytics 4',
 since:'2026-10-24',
 through,
 updatedAt:new Date().toISOString(),
 totals,
 pages,
 countries
};
await mkdir('src/data',{recursive:true});
await writeFile('src/data/readership.json',JSON.stringify(output,null,2)+'\n',{encoding:'utf8'});
console.log('Published aggregate snapshot:',{through,views:totals.views,countries:countries.length,essayPages:pages.length});
