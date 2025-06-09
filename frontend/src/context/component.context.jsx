import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth.context";
const ComponentContext = createContext();

export const useComponentContext = () => useContext(ComponentContext);
export const ComponentContextProvider = ({ children }) => {
  const { authUser } = useAuthContext();
  const [currentPage, setCurrentPage] = useState(0);
  const [allUser, setAllUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserMessages, setSelectedUserMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    if (authUser) {
      fetch("/api/users/getAllUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: JSON.parse(localStorage.getItem("user-info")).username,
        }),
      })
        .then((res) => res.json())
        .then((res) => setAllUser(res));
      fetch("/api/message/getLastMessages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: JSON.parse(localStorage.getItem("user-info")).username,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setLastMessage(res);
        });
    }
  }, [authUser]);

  useEffect(() => {
    setSelectedUserMessages([]);
    if (selectedUser) {
      fetch("/api/message/getAllUserMsg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: JSON.parse(localStorage.getItem("user-info")).username,
          reciverName: selectedUser.username,
        }),
      })
        .then((res) => res.json())
        .then((res) => setSelectedUserMessages(res));
    }
  }, [selectedUser]);

  return (
    <ComponentContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        allUser,
        setAllUser,
        selectedUser,
        setSelectedUser,
        selectedUserMessages,
        setSelectedUserMessages,
        lastMessage,
        setLastMessage,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ComponentContext.Provider>
  );
};
