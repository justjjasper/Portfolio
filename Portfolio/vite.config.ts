import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: '/home/ubuntu/key',
      cert: '/home/ubuntu/cert',
    },
    host: true,
    port: 443
  }
})
