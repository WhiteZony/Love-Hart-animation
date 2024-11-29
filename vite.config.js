import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});