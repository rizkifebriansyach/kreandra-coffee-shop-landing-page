// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti `site` dengan domain produksi kamu. Dipakai untuk sitemap.xml,
// canonical URL, dan Open Graph.
export default defineConfig({
  site: 'https://kreandra.coffee',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
