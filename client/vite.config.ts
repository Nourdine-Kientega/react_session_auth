import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend server URL
        changeOrigin: true, // This will make sure the backend sees the correct origin
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' prefix before sending to backend
      },
    }
  }
})
