import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://guerudev.github.io/portfolio-web-ruben-contreras/',
  plugins: [react()],
});