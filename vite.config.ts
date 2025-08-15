console.log('🔥 Vite config loaded');

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],

  // ⚠️ Change this depending on where you deploy
  // If serving from a subfolder like GitHub Pages, keep '/Medi-Bridge/'
  // If serving from root of a domain or locally, change to './'
  base: './',

  build: {
    cssCodeSplit: false, // bundle all CSS together
    minify: false, // no minification, dev-like output
    rollupOptions: {
      output: {
        manualChunks: undefined, // no JS chunk splitting
      },
    },
  },
});
