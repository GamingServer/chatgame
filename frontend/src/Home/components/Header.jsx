import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-4 px-6 relative z-20">
      <div className="flex justify-start items-center gap-2">
        <button className="sidebarModalOpenButton text-2xl text-white !leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20  "
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M5 5L19 19M5 19L19 5">
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.4s"
                  values="M5 5L19 19M5 19L19 5;M5 5L19 5M5 19L19 19"
                />
              </path>
              <path d="M12 12H12" opacity="0">
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.2s"
                  dur="0.4s"
                  values="M12 12H12;M5 12H19"
                />
                <set
                  fill="freeze"
                  attributeName="opacity"
                  begin="0.2s"
                  to="1"
                />
              </path>
            </g>
          </svg>{" "}
        </button>
        <h2 className="text-2xl font-semibold text-white">Quizio</h2>
      </div>
      <div className="flex justify-start items-center gap-2">
        <a
          href="#"
          className="text-white border border-color24 p-2 rounded-full flex justify-center items-center bg-color24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path strokeDasharray="4" strokeDashoffset="4" d="M12 3v2">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="4;0"
                />
              </path>
              <path
                strokeDasharray="28"
                strokeDashoffset="28"
                d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.2s"
                  dur="0.4s"
                  values="28;0"
                />
              </path>
              <path
                strokeDasharray="8"
                strokeDashoffset="8"
                d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="8;0"
                />
              </path>
            </g>
          </svg>{" "}
        </a>
        <Link
          to="#"
          className="text-white border border-color24 p-2 rounded-full flex justify-center items-center bg-color24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path
                strokeDasharray="20"
                strokeDashoffset="20"
                d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="20;0"
                />
              </path>
              <path
                strokeDasharray="36"
                strokeDashoffset="36"
                d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.5s"
                  dur="0.5s"
                  values="36;0"
                />
              </path>
            </g>
          </svg>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
