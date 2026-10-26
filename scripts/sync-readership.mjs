#!/usr/bin/env node
/**
 * Read-only GA4 aggregate export for the public Evidence to Decision website.
 * Credentials are only ever read from GitHub Actions Secrets; never written.
 */
import {createPrivateKey, sign} from 'node:crypto';
import {writeFile, mkdir} from 'node:fs/promises';
const START_DATE='2026-10-24';
const dateParts=Object.fromEntries(new Intl.DateTimeFormat('en-US', {
  year:'numeric', month:'2-digit', day:'2-digit', timeZone:'America/Chicago'
}).formatToParts(new Date()).map(part=>[part.type,part.value]));
const chicagoDay=`${dateParts.year}-${dateParts.month}-${dateParts.day}`;
// On the launch date, include today's (possibly provisional) data instead of
// querying a backwards range. Thereafter export finalized prior days only.
const includeLaunchDay=chicagoDay<=START_DATE;
const queryEndDate=includeLaunchDay?'today':'yesterday';
const lastReportDay=new Date(chicagoDay+'T12:00:00Z');
if(!includeLaunchDay) lastReportDay.setUTCDate(lastReportDay.getUTCDate()-1);
const through=lastReportDay.toISOString().slice(0,10);
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
   dateRanges:[{startDate:START_DATE,endDate:queryEndDate}],
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
  report([],['screenPageViews','totalUsers','activeUsers']),
  report(['unifiedPagePathScreen'],['screenPageViews']),
  report(['countryId','country'],['screenPageViews','totalUsers','activeUsers'])
]);
const totalRow=overall[0];
const totals={
 views:cleanInt(totalRow?.metricValues?.[0]?.value||0),
 // Distinct GA4 users for the selected period; not a count of identified people.
 totalUsers:cleanInt(totalRow?.metricValues?.[1]?.value||0),
 activeUsers:cleanInt(totalRow?.metricValues?.[2]?.value||0)
};
const pages=byPage.map(r=>({
 path:r.dimensionValues?.[0]?.value||'',
 views:cleanInt(r.metricValues?.[0]?.value)
})).filter(r=>/^\/essays\/[a-z0-9-]+\/$/.test(r.path)).sort((a,b)=>b.views-a.views);
const countries=byCountry.map(r=>({
 code:(r.dimensionValues?.[0]?.value||'').toUpperCase(),
 name:r.dimensionValues?.[1]?.value||'',
 views:cleanInt(r.metricValues?.[0]?.value),
 totalUsers:cleanInt(r.metricValues?.[1]?.value),
 activeUsers:cleanInt(r.metricValues?.[2]?.value)
})).filter(r=>/^[A-Z]{2}$/.test(r.code)&&r.views>0).sort((a,b)=>b.views-a.views);
// GA4 realtime reports can show activity before the standard reporting API
// finishes processing it. Never publish a false cumulative zero or replace
// the last verified positive snapshot with an empty, provisional response.
if (totals.views === 0 && totals.totalUsers === 0 && totals.activeUsers === 0 && pages.length === 0 && countries.length === 0) {
 console.log('GA4 daily summary has not returned verified activity; preserving existing public snapshot.');
 process.exit(0);
}
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
console.log('Published aggregate snapshot:',{through,views:totals.views,trackedUsers:totals.totalUsers,countries:countries.length,essayPages:pages.length});
