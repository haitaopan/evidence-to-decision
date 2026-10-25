import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
 const entries=(await getCollection('essays',({data})=>!data.draft)).sort((a,b)=>b.data.pubDate-a.data.pubDate);
 return rss({title:'Evidence to Decision | Haitao Pan, PhD',description:'Clinical trials, evidence, and the decisions between them.',site:context.site,items:entries.map(e=>({title:e.data.title,description:e.data.description,pubDate:e.data.pubDate,link:`essays/${e.id}/`}))});
}
