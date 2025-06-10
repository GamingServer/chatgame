import { createContext, useContext, useEffect, useState } from "react";

import { io } from "socket.io-client";
import { useAuthContext } from "./auth.context";
import { useComponentContext } from "./component.context";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const { selectedUser, setSelectedUserMessages } = useComponentContext();
  const { authUser } = useAuthContext();
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  

  useEffect(() => {
    const socket = io("http://192.168.0.201:8080");
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
