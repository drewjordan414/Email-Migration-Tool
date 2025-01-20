import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log("Vite Configuration Loaded");

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Specify your preferred port
  },
});
