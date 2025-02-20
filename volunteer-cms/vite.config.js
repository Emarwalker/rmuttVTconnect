import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // เปิดให้เข้าถึงจากเครือข่ายภายนอก (จำเป็นสำหรับ Render)
    port: process.env.PORT || 4173, // ใช้พอร์ตจาก Render หรือ fallback เป็น 4173
  }
})
