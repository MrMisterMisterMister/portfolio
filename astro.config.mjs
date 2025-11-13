import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { fileURLToPath, URL } from 'url';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrmistermistermister.github.io',
  base: '/portfolio/',
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@/lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        '@/layouts': fileURLToPath(new URL('./src/layouts', import.meta.url))
      }
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
