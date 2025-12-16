import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// تأكد من أن هذا الاسم يطابق اسم المستودع في GitHub حرفياً
const repoName = 'corporate-landing-page-pro';

export default defineConfig({
  // استخدام اسم المستودع كمسار أساسي (الأكثر ضماناً لـ GitHub Pages)
  base: `/${repoName}/`,
  
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
    // نعود للضغط الافتراضي (esbuild) لأنه أسرع وأقل مشاكل من terser
    minify: true, 
    rollupOptions: {
      // نلغي التقسيم اليدوي المعقد ونترك Vite يتصرف
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
});
