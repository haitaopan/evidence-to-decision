import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const site = process.env.PUBLIC_SITE_URL || 'https://evidencetodecision.org';
const base = process.env.PUBLIC_BASE_PATH ?? '/';
export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap()],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] },
});
