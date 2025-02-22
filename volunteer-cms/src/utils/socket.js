import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_URL || 'http://localhost:5001 || 'https://emarwalker.taileb79c1.ts.net');

export default socket;
