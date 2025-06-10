import React from "react";

import { useSocketContext } from "../context/socket.context";
import { useAuthContext } from "../context/auth.context";
import { useComponentContext } from "../context/component.context";
import ChatBox from "./components/ChatBox";
import BottemNevigation from "../Home/components/BottemNevigation";

export default function MainChatPage() {
  const { allUser, setSelectedUser, selectedUser, lastMessage } =
    useComponentContext();
  const { onlineUsers } = useSocketContext();
  const { authUser } = useAuthContext();
  console.log(onlineUsers);

  // Assuming allUser and onlineUsers are arrays of objects with a username property
  const onlineUserLength = [
    ...new Set(
      allUser
        .filter((user) => onlineUsers.some((u) => u.username === user.username))
        .map((user) => user.username)
    ),
  ].length;

  console.log(onlineUserLength);

  return (
    <>
      {selectedUser ? (
        <ChatBox />
      ) : (
        <div className="py-8">
          {/* Background decorations */}
          <img
            src="/assets/images/new-header.png"
            alt="Header Decoration"
            className="absolute top-0 left-0 right-0 -mt-16"
          />
          <div className="absolute top-0 left-0 bg-p1 blur-[150px] h-[160px] w-[150px]" />
          <div className="absolute top-40 right-0 bg-[#0ABAC9] blur-[160px] h-[180px] w-[100px]" />
          <div className="absolute top-80 right-40 bg-p2 blur-[240px] h-[210px] w-[180px]" />
          <div className="absolute bottom-0 right-0 bg-p1 blur-[225px] h-[170px] w-[145px]" />
          <img
            src="/assets/images/header-bg-1.png"
            alt=""
            className="absolute top-0 left-0 right-0 -mt-20"
          />
          <div className="absolute top-0 left-0 bg-p3 blur-[145px] h-[174px] w-[149px]" />
          <div className="absolute top-40 right-0 bg-[#0ABAC9] blur-[150px] h-[174px] w-[91px]" />
          <div className="absolute top-80 right-40 bg-p2 blur-[235px] h-[205px] w-[176px]" />
          <div className="absolute bottom-0 right-0 bg-p3 blur-[220px] h-[174px] w-[149px]" />

          {/* Page Title and Search */}
          <div className="relative z-10 pb-20">
            <div className="flex justify-between items-center gap-4 px-6">
              <h2 className="text-2xl font-semibold text-white">Chat List</h2>
            </div>

            {/* Search Box */}
            <div className="flex justify-between items-center gap-3 pt-8 px-6">
              <div className="flex items-center gap-3 bg-color24 border border-color24 p-4 rounded-full text-white w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="#000"
                    fill-rule="evenodd"
                    d="M10 6.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.691 3.516a4.5 4.5 0 1 1 .707-.707l2.838 2.837a.5.5 0 0 1-.708.708z"
                    clip-rule="evenodd"
                  />
                </svg>{" "}
                <input
                  type="text"
                  placeholder="Search Friends..."
                  className="bg-transparent outline-none placeholder:text-white w-full text-xs"
                />
              </div>
              <div className="bg-color24 border border-color24 p-4 rounded-full text-white flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M8 13c-1.86 0-3.41 1.28-3.86 3H2v2h2.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H22v-2H11.86c-.45-1.72-2-3-3.86-3m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M19.86 6c-.45-1.72-2-3-3.86-3s-3.41 1.28-3.86 3H2v2h10.14c.45 1.72 2 3 3.86 3s3.41-1.28 3.86-3H22V6zM16 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
                  ></path>
                </svg>{" "}
              </div>
            </div>

            {/* Online Users */}
            <div className="pt-24 pl-6">
              <p className="text-xl font-semibold">
                Online{" "}
                <span className="text-p2 dark:text-p1">
                  ({onlineUserLength})
                </span>
              </p>
              <div className="pb-2">
                <div className="flex gap-3 pt-5 scrollbar-none overflow-y-auto vertical-scrollbar">
                  {allUser.map((user, index) =>
                    onlineUsers.map((u) => {
                      if (u.username === user.username) {
                        return (
                          <div
                            className="flex flex-col shrink-0 justify-center items-center"
                            key={index}
                          >
                            <div className="relative border border-p1 p-1 rounded-full">
                              <img
                                src={user.profilePic}
                                alt=""
                                className="size-10 rounded-full bg-color8"
                              />
                              <div className="bg-white p-0.5 rounded-full absolute -right-1.5 bottom-1">
                                <div className="size-3 rounded-full bg-p3" />
                              </div>
                            </div>
                            <p className="text-xs pt-2 text-nowrap">
                              {user.username}
                            </p>
                          </div>
                        );
                      }
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Most Recent Section */}
            <p className="font-semibold pt-5 px-6">Most recent</p>
            <div className="px-6 flex flex-col gap-5 pt-5">
              {allUser.map((user, index) => {
                const isOnline = onlineUsers.some(
                  (u) => u.username === user.username
                );

                const recentMsgObj = lastMessage.find(
                  (msg) =>
                    msg.sender.username === user.username ||
                    msg.reciver.username === user.username
                );

                const recentMsgText = recentMsgObj
                  ? recentMsgObj.message.length > 30
                    ? recentMsgObj.message.slice(0, 30) + "..."
                    : recentMsgObj.message
                  : "Start a conversation";

                if (user.username !== authUser.username) {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setSelectedUser(user)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative border border-p1 p-1 rounded-full">
                          <img
                            src={user.profilePic}
                            alt=""
                            className="size-10 rounded-full bg-color8"
                          />
                          <div className="bg-white p-0.5 rounded-full absolute -right-1.5 bottom-1">
                            {isOnline && (
                              <div className="size-3 rounded-full bg-p3" />
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold">{user.username}</p>
                          <p className="text-color5 text-xs dark:text-white truncate max-w-[200px]">
                            {recentMsgText}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <BottemNevigation />
        </div>
      )}
    </>
  );
}
