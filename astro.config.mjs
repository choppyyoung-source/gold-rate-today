// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

const isDev = process.env.NODE_ENV !== 'production' && !process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  site: 'https://goldrateslive.com',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  ...(isDev ? {} : { adapter: cloudflare() }),
  integrations: [react()]
});
