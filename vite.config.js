import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dataManifestPlugin, { dataManifestPluginBuild } from './plugins/dataManifest.js'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), dataManifestPlugin(), dataManifestPluginBuild()],
    server: {
        port: 5173, open: true,
    
    },
     build: {
    outDir: 'dist', // this must match what Vercel expects
  },
})


