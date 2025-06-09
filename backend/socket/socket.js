const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const user = new Map();
const msgID = new Map();
let selectedUser = null;
let onlineUsers = [];
const seenMsg = [];

const getSelectedUser = () => selectedUser;

const getOnlineUsers = () => onlineUsers;

const getUserToken = (id) => user.get(id);
const isUserOnline = ({ id }) => {
  return user.get(id);
};

io.on("connection", (socket) => {
  socket.on("join", async (username) => {
    user.set(username, socket.id);
    msgID.set(socket.id, username);
    if (!onlineUsers.includes(username)) {
      onlineUsers.push(username);
      const user = await prisma.users.findMany({
        where: {
          username: {
            in: onlineUsers,
          },
        },
        select: {
          username: true,
          profilePic: true,
        },
      });
      socket.broadcast.emit("onlineUsers", user);
    }
  });
  socket.on("disconnect", async () => {
    const username = msgID.get(socket.id);

    if (username) {
      user.delete(username);
      msgID.delete(socket.id);
      onlineUsers = onlineUsers.filter((user) => user !== username);
      const users = await prisma.users.findMany({
        where: {
          username: {
            in: onlineUsers,
          },
        },
        select: {
          username: true,
          profilePic: true,
        },
      });
      socket.broadcast.emit("onlineUsers", users);
    }
  });
});

module.exports = {
  app,
  server,
  io,
  isUserOnline,
  getOnlineUsers,
  getSelectedUser,
  getUserToken,
  seenMsg,
};
