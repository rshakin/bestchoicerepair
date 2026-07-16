// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: switch to https://www.bestchoicerepair.com (and update public/CNAME
  // back to www.bestchoicerepair.com) at domain cutover time.
  site: 'https://staging.bestchoicerepair.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});