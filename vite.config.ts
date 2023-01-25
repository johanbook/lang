import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lang/",
  build: {
    outDir: "build",
    sourcemap: true,
  },
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true,
  },
})
