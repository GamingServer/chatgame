import React from "react";
import BottemNevigation from "../Home/components/BottemNevigation";

const ShareAndEarn = () => {
  return (
    <>
      <div className="container min-h-dvh relative overflow-hidden py-8 dark:text-white -z-10 dark:bg-color1">
        {/* Absolute Items Start */}
        <img
          src="assets/images/header-bg-2.png"
          alt=""
          className="absolute top-0 left-0 right-0 -mt-6"
        />
        <div className="absolute top-0 left-0 bg-p3 blur-[145px] h-[174px] w-[149px]" />
        <div className="absolute top-40 right-0 bg-[#0ABAC9] blur-[150px] h-[174px] w-[91px]" />
        <div className="absolute top-80 right-40 bg-p2 blur-[235px] h-[205px] w-[176px]" />
        <div className="absolute bottom-0 right-0 bg-p3 blur-[220px] h-[174px] w-[149px]" />
        {/* Absolute Items End */}
        {/* Page Title Start */}
        <div className="relative z-10 px-6 pb-20">
          <div className="flex justify-between items-center gap-4">
            <div className="flex justify-start items-center gap-4">
              <h2 className="text-2xl font-semibold text-white">
                Invite &amp; Earn rewards
              </h2>
            </div>
          </div>
          <div className="flex justify-between items-center pt-8 gap-4">
            <a
              href="invite-friends.html"
              className="py-2 w-full bg-p1 text-white text-sm font-semibold rounded-lg block text-center"
            >
              Share with Friends
            </a>
            <button className="py-2 w-full bg-white text-sm font-semibold rounded-lg dark:text-color1">
              Shared list
            </button>
          </div>
          <div className="pt-8">
            <div className="py-6 px-5 bg-white dark:bg-color9 border border-dashed border-p1 rounded-xl">
              <div className="flex justify-between items-center pb-4 border-b border-dashed border-p1">
                <div className="flex justify-start items-center gap-2">
                  <i className="ph ph-megaphone text-p1" />
                  <p className="text-xs">Referral Code :</p>
                </div>
                <div className="flex justify-start items-start">
                  <p className="text-xl font-semibold">645546565</p>
                  <i className="ph ph-copy text-p1 cursor-pointer" />
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-xs font-semibold">Or share link via</p>
                <div className="flex justify-start items-center gap-2">
                  <a href="#">
                    <img src="assets/images/messanger.svg" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/images/whatsapp.svg" alt="" />
                  </a>
                  <button className="p-2 rounded-full border border-color16 bg-color14 flex justify-center items-center text-bgColor18 dark:border-bgColor16 dark:bg-bgColor16 dark:text-white">
                    <i className="ph ph-envelope-open" />
                  </button>
                  <button className="p-2 rounded-full border border-color16 bg-color14 flex justify-center items-center text-bgColor18 dark:border-bgColor16 dark:bg-bgColor16 dark:text-white">
                    <i className="ph ph-link-simple" />
                  </button>
                </div>
              </div>
            </div>
            <p className="text-xs text-color5 text-center pt-5 dark:text-white">
              <i className="ph ph-asterisk text-p1" /> Will earn when 11 friends
              join Quize platform
            </p>
          </div>
          <div className="bg-white dark:bg-color10 py-8 px-5 rounded-xl border border-color21 mt-6">
            <p className="text-xl font-semibold">How it works</p>
            <div className="flex flex-col gap-4 pt-5">
              <div className="flex justify-start items-start gap-3">
                <div className="size-8 flex justify-center items-center border border-color16 bg-color14 rounded-full text-xs font-semibold shrink-0 dark:text-p1 dark:border-bgColor16 dark:bg-bgColor14">
                  1
                </div>
                <div className="">
                  <p className="font-semibold">Invite Friends :</p>
                  <p className="text-xs text-color5 pt-1 dark:text-bgColor5">
                    Invite friends who share your passion for competitive
                    contests to join MindPe. Share your referral code with them
                    to sign up and receive a joining bonus.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="size-8 flex justify-center items-center border border-color16 bg-color14 rounded-full text-xs font-semibold shrink-0 dark:text-p1 dark:border-bgColor16 dark:bg-bgColor14">
                  2
                </div>
                <div className="">
                  <p className="font-semibold">Earn Rewards :</p>
                  <p className="text-xs text-color5 pt-1 dark:text-bgColor5">
                    When your friends use your referral code during
                    registration, they receive a cash reward as a joining bonus.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="size-8 flex justify-center items-center border border-color16 bg-color14 rounded-full text-xs font-semibold shrink-0 dark:text-p1 dark:border-bgColor16 dark:bg-bgColor14">
                  3
                </div>
                <div className="">
                  <p className="font-semibold">Join Contests :</p>
                  <p className="text-xs text-color5 pt-1 dark:text-bgColor5">
                    Encourage your friends to explore MindPe and join contests
                    based on their skill sets. To activate the joining bonus,
                    they need to participate in at least one paid contest.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="size-8 flex justify-center items-center border border-color16 bg-color14 rounded-full text-xs font-semibold shrink-0 dark:text-p1 dark:border-bgColor16 dark:bg-bgColor14">
                  1
                </div>
                <div className="">
                  <p className="font-semibold">Compete and Win :</p>
                  <p className="text-xs text-color5 pt-1 dark:text-bgColor5">
                    Engage in various contests, showcase your skills, and
                    compete against others for exciting prizes and rewards
                    offered on MindPe's platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Tab Buttons Start */}
      <BottemNevigation/>
    </>
  );
};

export default ShareAndEarn;
