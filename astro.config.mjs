// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

const isDevServer = !process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  site: 'https://goldrateslive.com',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  ...(isDevServer ? {} : { adapter: cloudflare() }),
  integrations: [react()]
});
