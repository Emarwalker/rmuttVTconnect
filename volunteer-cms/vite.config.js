import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // เปิดให้เข้าถึงจากเครือข่ายภายนอก
    port: process.env.PORT || 4173, // ใช้พอร์ตจาก Render หรือ fallback เป็น 4173
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: ['project-100-front.onrender.com'] // ✅ อนุญาตให้ Render ใช้งานได้
  }
})
