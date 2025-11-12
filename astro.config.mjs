import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrmistermistermister.github.io',
  base: '/portfolio/',
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
