import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        blog: resolve(__dirname, 'blog.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        directory: resolve(__dirname, 'directory.html'),
        checkout: resolve(__dirname, 'checkout.html')
      }
    }
  }
});
