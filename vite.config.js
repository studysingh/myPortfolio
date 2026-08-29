import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Relative base so the build works on GitHub Pages project sites
// (served from https://<user>.github.io/<repo>/) as well as at a root domain.
export default defineConfig({
  base: './',
  plugins: [react()],
})
