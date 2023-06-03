import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {  
    host: '172.16.0.227', /* HERE */  
    hmr: {
      host: '172.16.0.227'
    }
  }
})
