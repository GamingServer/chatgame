import React from "react";
import { useComponentContext } from "../../context/component.context";

const BottemNevigation = () => {
  const { currentPage, setCurrentPage } = useComponentContext();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="container bg-p2 px-6 py-3 rounded-t-2xl flex justify-around items-center dark:bg-p1">
        <button
          className="flex justify-center items-center text-center flex-col gap-1"
          onClick={() => setCurrentPage(0)}
        >
          <div
            className={`flex justify-center items-center p-2 rounded-full ${
              currentPage === 0 ? "bg-p1" : "bg-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000"
                d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77"
              />
            </svg>
          </div>
          <p className="text-xs text-white font-semibold dark:text-color10">
            Home
          </p>
        </button>

        <button
          className="flex justify-center items-center text-center flex-col gap-1"
          onClick={() => setCurrentPage(1)}
        >
          <div
            className={`flex justify-center items-center p-2 rounded-full ${
              currentPage === 1 ? "bg-p1" : "bg-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#000"
                  d="M10.94 2.454a1.5 1.5 0 0 1 2.12 0l2.83 2.828a1.5 1.5 0 0 1 0 2.122l-2.83 2.828a1.5 1.5 0 0 1-2.12 0L8.11 7.404a1.5 1.5 0 0 1 0-2.122zm5.656 5.657a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 0 1 0-2.122zm-11.314 0a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 0 1 0-2.122zm5.657 5.657a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.121l-2.828 2.829a1.5 1.5 0 0 1-2.122 0l-2.828-2.829a1.5 1.5 0 0 1 0-2.12z"
                />
              </g>
            </svg>
          </div>
          <p className="text-xs text-white font-semibold dark:text-color10">
            Library
          </p>
        </button>

        <button
          className="flex justify-center items-center text-center flex-col gap-1"
          onClick={() => setCurrentPage(2)}
        >
          <div
            className={`flex justify-center items-center p-2 rounded-full ${
              currentPage === 2 ? "bg-p1" : "bg-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 20 20"
            >
              <g fill="#000" fillRule="evenodd" clipRule="evenodd">
                <path d="M5 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
                <path d="M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0m11.792-.3a.5.5 0 0 0 0 .708l.338.337A3.47 3.47 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0" />
                <path d="M14 9a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 1a3 3 0 1 1 0-6a3 3 0 0 1 0 6m-4.5 3.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5" />
                <path d="M9.5 11.75a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
              </g>
            </svg>
          </div>
          <p className="text-xs text-white font-semibold dark:text-color10">
            Share & Earn
          </p>
        </button>

        <button
          className="flex justify-center items-center text-center flex-col gap-1"
          onClick={() => setCurrentPage(3)}
        >
          <div
            className={`flex justify-center items-center p-2 rounded-full ${
              currentPage === 3 ? "bg-p1" : "bg-white"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 21.25a9.25 9.25 0 1 0-8.307-5.177c.108.22.144.468.089.706l-.816 3.536a.6.6 0 0 0 .72.72l3.535-.817a1.06 1.06 0 0 1 .706.09A9.2 9.2 0 0 0 12 21.25M7.97 9.886h8.06m-8.06 4.228h5.748"
              />
            </svg>
          </div>
          <p className="text-xs text-white font-semibold dark:text-color10">
            Chat
          </p>
        </button>
      </div>
    </div>
  );
};

export default BottemNevigation;
