import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // อนุญาตให้เข้าถึงจากทุกที่
    port: process.env.PORT || 4173, // ใช้พอร์ตที่ Render กำหนด
    strictPort: true, // บังคับให้ใช้พอร์ตที่กำหนด
  },
  preview: {
    host: '0.0.0.0', // อนุญาตให้ preview จากทุกที่
    port: process.env.PORT || 4173,
    strictPort: true, // บังคับใช้พอร์ตนี้
    allowedHosts: ['project-100-front.onrender.com'], // อนุญาตให้ Render ใช้
  },
  build: {
    outDir: 'dist', // ให้แน่ใจว่า build ออกมาอยู่ใน dist
    emptyOutDir: true, // ล้างโฟลเดอร์ก่อน build ใหม่
  },
})
