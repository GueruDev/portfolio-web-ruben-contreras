import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-web-ruben-contreras/',
  plugins: [react()],
});