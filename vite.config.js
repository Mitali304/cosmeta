import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // This option should be inside "server"
  },
  build: {
    outDir: 'dist', // Ensure the build output goes into "dist"
  },
});
