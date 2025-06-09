import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth.context";

const Index = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { authUser } = useAuthContext();

  if (authUser) return <Navigate to="/home" />

  return (
    <div className="container bg-white h-screen relative dark:bg-black dark:text-white">
      {/* Background & Icons */}
      <div className="absolute top-0 left-0 bg-p3 blur-[145px] h-[174px] w-[149px]"></div>
      <div className="absolute top-40 right-0 bg-[#0ABAC9] blur-[150px] h-[174px] w-[91px]"></div>
      <div className="absolute top-80 right-40 bg-p2 blur-[235px] h-[205px] w-[176px]"></div>
      <div className="absolute bottom-0 right-0 bg-p3 blur-[220px] h-[174px] w-[149px]"></div>
      <div className="absolute left-0 bottom-[45%]">
        <img src="assets/images/icon-1.png" alt="" />
      </div>
      <div className="absolute right-0 bottom-[35%]">
        <img src="assets/images/icon-2.png" alt="" />
      </div>
      <div className="relative z-10">
        <img src="assets/images/onboarding-img.png" alt="" />
      </div>

      {/* Swiper Section */}
      <section className="pt-24">
        <div className="relative px-4">
          <img
            src="assets/images/icon-3.png"
            className="absolute -top-8 left-4"
            alt=""
          />

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            loop={false}
            className="onboarding-steps-slider !pb-10"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl font-semibold">
                  Quiz On the <span className="text-[#ff6f0f]">Go</span>
                </h1>
                <p className="m-body pt-5 opacity-80">
                  Answer a quiz for a shot at winning thrilling prizes! Test
                  your knowledge and win big!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl font-semibold">Knowledge Boosting</h1>
                <p className="m-body pt-5 opacity-80">
                  Find fun and interesting quizzes to boost up your knowledge
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl font-semibold">Win Rewards Galore</h1>
                <p className="m-body pt-5 opacity-80">
                  Answer a quiz for a shot at winning thrilling prizes! Test
                  your knowledge and win big!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center px-6">
            <Link
              to="/signup"
              className="text-p2 dark:text-p1 font-bold"
            >
              Skip
            </Link>
            <button
              onClick={() => {
                const swiper = swiperRef.current;
                if (swiper) {
                  if (activeIndex < swiper.slides.length - 1) {
                    swiper.slideNext();
                  } else {
                    window.location.href = "/signup";
                  }
                }
              }}
              className="text-white flex justify-center items-center bg-p2 rounded-full text-2xl p-3.5"
            >
              {activeIndex < 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="#fff" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z" />
                </svg>
              ) : (
                <span className="text-base font-medium">Get Started</span>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
