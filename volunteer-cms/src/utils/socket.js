import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_URL || 'https://emarwalker.taileb79c1.ts.net' || 'http://localhost:5001');

export default socket;
