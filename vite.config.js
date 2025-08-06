import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/3d-portfolio/',          // 👈 Required for correct asset loading
  assetsInclude: ['**/*.glb'],     // 👈 Useful for loading 3D models
})
