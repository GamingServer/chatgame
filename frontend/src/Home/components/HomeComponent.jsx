import React from "react";
import Header from "./Header";
import CategorySlider from "./CategorySlider";
import Contest from "./Contest";
import BestPlayer from "./BestPlayer";
import UpcomingEvent from "./UpcomingEvent";
import BottemNevigation from "./BottemNevigation";

const HomeComponent = () => {
  return (
    <div className="py-8">
      <img
        src="assets/images/header-bg-1.png"
        alt=""
        className="absolute top-0 left-0 right-0 -mt-6"
      />
      <div className="absolute top-0 left-0 bg-p3 blur-[145px] h-[174px] w-[149px]"></div>
      <div className="absolute top-40 right-0 bg-[#0ABAC9] blur-[150px] h-[174px] w-[91px]"></div>
      <div className="absolute top-80 right-40 bg-p2 blur-[235px] h-[205px] w-[176px]"></div>
      <div className="absolute bottom-0 right-0 bg-p3 blur-[220px] h-[174px] w-[149px]"></div>

      {/* Main Content */}
      <div className="relative z-10 pb-20">
        {/* Header */}
        <Header />

        {/* Search Box */}
        <div className="flex justify-between items-center gap-3 pt-8 px-6 relative z-20">
          <a
            href="contest-search-result.html"
            className="flex justify-start items-center gap-3 bg-color24 border border-color24 p-4 rounded-full text-white w-full"
          >
            <i className="ph ph-magnifying-glass"></i>
            <span className="text-white w-full text-xs">Search Contest</span>
          </a>
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
              />
            </svg>{" "}
          </div>
        </div>

        {/* Category Slider */}
        <CategorySlider />

        {/* Invite Friends Section */}
        <div className="px-6">
          <div className="px-4 bg-p2 flex justify-between items-center rounded-2xl relative after:absolute after:h-full after:left-2 after:right-2 after:bg-p2 after:mt-6 after:opacity-30 after:rounded-2xl after:-z-10 before:absolute before:h-full before:bg-p2 before:mt-12 before:opacity-30 before:rounded-2xl before:-z-10 before:left-4 before:right-4">
            <div className="text-white font-semibold !leading-none pl-2">
              <p>Invite Friends</p>
              <p className="text-[36px] py-2 pl-2">$80</p>
              <p className="pl-7">Earn Up To</p>
            </div>
            <div>
              <img src="assets/images/invite_illus.png" alt="" />
            </div>
          </div>
        </div>

        {/* Current Contest Section */}
        <Contest />

        {/* Best Players Slider */}
        <BestPlayer />

        {/* Upcoming Contest Slider */}
        <UpcomingEvent />
      </div>
      <BottemNevigation />
    </div>
  );
};

export default HomeComponent;
