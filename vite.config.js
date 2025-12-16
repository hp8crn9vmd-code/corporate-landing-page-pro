import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // المسار المطلق الدقيق (حساس لحالة الأحرف)
  base: '/corporate-landing-page-pro/',
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  plugins: [
    react(),
    ViteImageOptimizer({}),
  ],
  
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: true,
  },
});
