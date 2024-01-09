import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert')),
    },
    host: true,
    port: 443
  }
})
