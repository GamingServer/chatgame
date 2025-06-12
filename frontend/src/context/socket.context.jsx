import { createContext, useContext, useEffect, useState } from "react";

import { io } from "socket.io-client";
import { useAuthContext } from "./auth.context";
import { useComponentContext } from "./component.context";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const {
    selectedUser,
    setSelectedUserMessages,
    allUser,
    setAllUser,
    lastMessage,
    setLastMessage,
  } = useComponentContext();
  const { authUser } = useAuthContext();
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:8080");
    socket.emit("join", authUser?.username);

    socket.on("receiveMessage", (data) => {
      if (data.senderName === selectedUser?.username) {
        setSelectedUserMessages((prev) => [...prev, data.message]);
      }
    });
    socket.on("onlineUsers", (data) => {
      data = data.filter((user) => user.username !== authUser?.username);
      setOnlineUsers(data);
    });

    socket.on("newMessage", (data) => {
      data = data.message;
      setLastMessage((prev) => {
        const index = prev.findIndex(
          (item) =>
            (item.senderId === data.senderId &&
              item.receiverId === data.receiverId) ||
            (item.senderId === data.receiverId &&
              item.receiverId === data.senderId)
        );

        if (index !== -1) {
          const updated = [...prev];
          updated[index] = data;
          return updated;
        } else {
          return [...prev, data];
        }
      });
    });

    socket.on("newUser", (value) => {
      setAllUser(
        [...allUser, ...value].reduce((stack, current) => {
          if (!stack.find((item) => item.id === current.id)) {
            stack.push(current);
          }
          return stack;
        }, [])
      );
    });

    setSocket(socket);
  }, []);
  return (
    <SocketContext.Provider
      value={{ socket, setSocket, onlineUsers, setOnlineUsers }}
    >
      {children}
    </SocketContext.Provider>
  );
};
