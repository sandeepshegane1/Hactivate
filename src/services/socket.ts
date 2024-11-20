import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export const initializeSocket = (userId: string, userType: string) => {
  socket.emit('register', { userId, userType });
};

export const subscribeToNotifications = (callback: (data: any) => void) => {
  socket.on('new-donation', callback);
  socket.on('new-request', callback);
  socket.on('donation-updated', callback);
  socket.on('request-updated', callback);
};

export const disconnectSocket = () => {
  socket.disconnect();
};

export default socket;