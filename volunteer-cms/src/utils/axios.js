import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rmuttvtconnext.onrender.com/api',
  timeout: 60000,  
  withCredentials: true, // ✅ ถูกต้อง
  headers: {
    'Content-Type': 'application/json'
  }
});


api.interceptors.response.use(
  response => response,
  error => {
    // ถ้าเป็น timeout error
    if (error.code === 'ECONNABORTED') {
      return Promise.reject({ 
        message: 'การเชื่อมต่อใช้เวลานานเกินไป กรุณาลองใหม่อีกครั้ง' 
      });
    }

    // กรณี error อื่นๆ
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', error);
    }

    return Promise.reject(
      error?.response?.data || { 
        message: 'เกิดข้อผิดพลาด กรุณาลองใหม่' 
      }
    );
  }
);

export default api;
