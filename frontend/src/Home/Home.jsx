import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useComponentContext } from "../context/component.context";
import SideBar from "./components/SideBar";
import BottemNevigation from "./components/BottemNevigation";
import HomeComponent from "./components/HomeComponent";
import Library from "../library/Library";
import MainChatPage from "../chat/MainChatPage";
import ShareAndEarn from "../share&earn/ShareAndEarn";

const Home = () => {
  const { currentPage, setCurrentPage } = useComponentContext();

  useEffect(() => {
    new Swiper(".upcoming-contest-slider", {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    new Swiper(".category-slider", {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: "#itemRight",
        prevEl: "#itemLeft",
      },
    });
  }, []);

  return (
    <div className="container min-h-dvh relative overflow-hidden  dark:text-white dark:bg-black">
      {/* Dynamic Page Content */}
      {currentPage === 0 && <HomeComponent />}
      {currentPage === 1 && <Library />}
      {currentPage === 2 && <ShareAndEarn />}
      {currentPage === 3 && <MainChatPage />}

      {/* Bottom Navigation */}

      {/* Sidebar */}
      <SideBar />

      {/* Logout Modal */}
      <div className="hidden inset-0 withdrawModal z-50">
        <div className="bg-black opacity-40 absolute inset-0 container"></div>
        <div className="flex justify-end items-end flex-col h-full">
          <div className="container relative">
            <img
              src="assets/images/modal-bg-white.png"
              alt="modal background"
              className="dark:hidden"
            />
            <img
              src="assets/images/modal-bg-black.png"
              alt="modal background dark"
              className="hidden dark:block"
            />
            <div className="bg-white dark:bg-color1 relative z-40 overflow-auto pb-8">
              <div className="px-6 pt-8 border-b border-color21 dark:border-color24 border-dashed pb-5 mx-6">
                <p className="text-2xl text-p1 text-center font-semibold">
                  Log Out
                </p>
              </div>
              <div className="pt-5 px-6">
                <p className="text-color5 dark:text-white pb-8 text-center">
                  Are you sure you want to log out?
                </p>
                <div className="flex justify-between items-center gap-3">
                  <button className="withdrawModalCloseButton border border-color16 bg-color14 rounded-full py-3 text-p2 text-sm font-semibold text-center block dark:border-p1 w-full dark:text-white">
                    Cancel
                  </button>
                  <a
                    href="sign-in.html"
                    className="bg-p2 rounded-full py-3 text-white text-sm font-semibold text-center block dark:bg-p1 w-full"
                  >
                    Yes, Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
