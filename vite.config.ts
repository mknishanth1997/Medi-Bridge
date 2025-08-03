console.log('🔥 Vite config loaded');
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // 👈 ADD THIS

export default defineConfig({
  plugins: [react(), svgr()], // 👈 ADD svgr to plugins array
});
