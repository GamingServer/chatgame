import React, { useEffect, useRef, useState } from "react";
import { useComponentContext } from "../../context/component.context";
import { useAuthContext } from "../../context/auth.context";
const ChatBox = () => {
  const { authUser } = useAuthContext();
  const messagesEndRef = useRef(null);
  const {
    selectedUserMessages,
    selectedUser,
    setSelectedUser,
    setSelectedUserMessages,
  } = useComponentContext();

  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUserMessages]);

  const handleSend = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      id: Date.now(),
      message: messageInput,
      createdAt: new Date().toISOString(),
      sender: { username: authUser?.username },
      reciver: { username: selectedUser?.username },
    };

    fetch("/api/message/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderName: authUser?.username,
        reciverName: selectedUser?.username,
        message: messageInput,
      }),
    });

    setSelectedUserMessages((prev) => [...prev, newMessage]);
    setMessageInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const formatMessageDate = (dateString) => {
    const messageDate = new Date(dateString);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (messageDate.toDateString() === today.toDateString()) return "Today";
    if (messageDate.toDateString() === yesterday.toDateString())
      return "Yesterday";

    return messageDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="relative h-screen w-screen flex flex-col bg-bgColor1 dark:bg-color1">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-p2 px-6 py-4 flex justify-between items-center h-[72px]">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden  font-semibold text-white"
            onClick={() => setSelectedUser(null)}
          >
            ← Back
          </button>
          <div className="relative border-2 border-p1 p-1 rounded-full">
            <img
              src={selectedUser?.profilePic}
              alt=""
              className="size-10 rounded-full bg-color8"
            />
            <div className="bg-white p-0.5 rounded-full absolute -right-1.5 bottom-1">
              <div className="size-3 rounded-full bg-p3" />
            </div>
          </div>
          <div className="text-white">
            <p className="text-xl font-semibold">{selectedUser?.username}</p>
            <p className="text-xs font-semibold">Online</p>
          </div>
        </div>
        <div className="p-2 rounded-full border border-color24 bg-color24 text-white">
          <i className="ph ph-phone-call" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 mt-[72px] mb-[88px] overflow-y-auto px-6 pt-20 pb-20">
        <div className="flex flex-col gap-8">
          {(() => {
            const groupedMessages = {};
            selectedUserMessages.forEach((msg) => {
              const dateLabel = formatMessageDate(msg.createdAt);
              if (!groupedMessages[dateLabel]) {
                groupedMessages[dateLabel] = [];
              }
              groupedMessages[dateLabel].push(msg);
            });

            return Object.entries(groupedMessages).map(
              ([dateLabel, messages]) => (
                <div key={dateLabel} className={dateLabel}>
                  <div className="flex justify-center py-4">
                    <p className="text-xs font-semibold bg-white dark:bg-color9 dark:border-color24 py-2 px-8 border border-color21 rounded-full">
                      {dateLabel}
                    </p>
                  </div>

                  {messages.map((msg) => {
                    const isOutgoing =
                      msg.sender?.username === authUser?.username;
                    return isOutgoing ? (
                      <div
                        key={msg.id}
                        className="flex justify-end items-end gap-2 text-right "
                      >
                        <div className="flex flex-col items-end gap-1">
                          <p className="text-color5 bg-white dark:bg-color9 dark:text-white border border-color21 p-4 rounded-l-2xl rounded-tr-2xl text-xs inline-block max-w-[280px]break-words whitespace-normal">
                            {msg.message}
                          </p>

                          <p className="text-xs text-color5">
                            {new Date(msg.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                        <svg
                          className="border bg-p2 p-1 rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
                          />
                        </svg>{" "}
                      </div>
                    ) : (
                      <div key={msg.id} className="flex items-start gap-3 pb-5">
                        <div className="relative border-2 border-p1 p-1 rounded-full">
                          <img
                            src={selectedUser?.profilePic}
                            alt=""
                            className="size-9 rounded-full bg-color8"
                          />
                          <div className="bg-white p-0.5 rounded-full absolute -right-1.5 bottom-1">
                            <div className="size-3 rounded-full bg-p3" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-white bg-p2 dark:bg-p1 p-4 rounded-r-2xl rounded-bl-2xl text-xs max-w-[280px] break-words whitespace-normal">
                            {msg.message}
                          </p>
                          <p className="text-xs text-color5">
                            {new Date(msg.createdAt).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )
            );
          })()}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className=" overflow-hidden fixed bottom-0 left-0 right-0 z-10 w-full bg-white dark:bg-color9 border-t border-color21 px-4 py-2">
        <div className="flex items-center gap-2 w-full">
          <button className="bg-p1 text-white p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path fill="#ffffff" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
            </svg>
          </button>
          <button className="text-p1 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="#ee9212"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
                <circle cx="12" cy="13" r="3" />
              </g>
            </svg>
          </button>
          <button className="text-p1 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ee9212"
                d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-13.5 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 10h-7l4-5l1.5 2l3-4l5.5 7z"
              />
            </svg>
          </button>
          <button className="text-p1 text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ee9212"
                d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z"
              />
            </svg>
          </button>
          <div className="flex items-center bg-white dark:bg-color9 p-3 rounded-full border border-color21 flex-1 ">
            <input
              type="text"
              placeholder="Message"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full text-xs bg-transparent outline-none dark:text-white placeholder:text-color9 dark:placeholder:text-white"
            />
            <i className="ph ph-smiley text-color5 dark:text-white ml-2" />
          </div>
          <button
            className="bg-p1 p-2 text-white rounded-full  "
            onClick={handleSend}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <defs>
                <path
                  id="lsiconSendFilled0"
                  d="M12.97 2.67a.5.5 0 0 0-.64-.64l-11 4a.5.5 0 0 0-.016.934l4.433 1.773l2.9-3.09l.707.707l-2.98 3.176l1.662 4.156a.5.5 0 0 0 .934-.015z"
                />
              </defs>
              <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
                <use href="#lsiconSendFilled0" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
