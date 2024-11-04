import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createServer } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // This enables the history API fallback
  },
});
