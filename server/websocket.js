import { Server } from 'socket.io';

let io;
const userSockets = new Map();

export const setupWebSocket = (socketServer) => {
  io = socketServer;

  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('register', ({ userId, userType }) => {
      userSockets.set(userId, { socket, userType });
    });

    socket.on('disconnect', () => {
      for (const [userId, data] of userSockets.entries()) {
        if (data.socket === socket) {
          userSockets.delete(userId);
          break;
        }
      }
    });
  });
};

export const notifyRecipients = (event, data) => {
  for (const [_, userData] of userSockets.entries()) {
    if (userData.userType === 'recipient') {
      userData.socket.emit(event, data);
    }
  }
};

export const notifyDonors = (event, data) => {
  for (const [_, userData] of userSockets.entries()) {
    if (userData.userType === 'donor') {
      userData.socket.emit(event, data);
    }
  }
};

export const notifyUser = (userId, event, data) => {
  const userData = userSockets.get(userId);
  if (userData) {
    userData.socket.emit(event, data);
  }
};