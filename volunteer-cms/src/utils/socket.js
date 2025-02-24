import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_URL || 'https://emarwalker.taileb79c1.ts.net' || 'https://project-back-deploy100.onrender.com/');

export default socket;
