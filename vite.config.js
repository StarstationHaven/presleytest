import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/presley-excel-website/',
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: [
      '3003-irwo46eibzs5gw39xyvnr-36548691.us2.manus.computer',
      'localhost',
      '127.0.0.1',
    ],
  },
})
