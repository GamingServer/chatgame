import React from "react";
import { Link } from "react-router-dom";

const Contest = () => {
  return (
    <div className="pt-12 px-6">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <i className="ph-fill text-xl ph-trophy text-p1"></i>
          <h3 className="text-xl font-semibold">Current Contest</h3>
        </div>
        <Link
          to="#"
          className="text-p1 font-semibold text-sm"
        >
          See All
        </Link>
      </div>
      <div className="pt-5">
        <Link
          href="#"
          className="rounded-2xl overflow-hidden shadow2 block"
        >
          <div className="flex justify-between items-center py-3.5 px-5 bg-p2 bg-opacity-20 dark:bg-bgColor16">
            <div className="flex justify-start items-center gap-3">
              <p className="font-medium">Starting In</p>
              <div className="flex justify-start items-center gap-1">
                <p className="text-p2 text-[10px] py-0.5 px-1 bg-p2 bg-opacity-20 dark:text-p1 dark:bg-color24 rounded-md">
                  05
                </p>
                <p className="text-p2 text-base font-semibold dark:text-white">
                  :
                </p>
                <p className="text-p2 text-[10px] py-0.5 px-1 bg-p2 bg-opacity-20 dark:text-p1 dark:bg-color24 rounded-md">
                  14
                </p>
                <p className="text-p2 text-base font-semibold dark:text-white">
                  :
                </p>
                <p className="text-p2 text-[10px] py-0.5 px-1 bg-p2 bg-opacity-20 dark:text-p1 dark:bg-color24 rounded-md">
                  20
                </p>
              </div>
            </div>
            <p className="text-xs text-p1">Read Instruction</p>
          </div>
          <div className="p-5 bg-white dark:bg-color10">
            <div className="flex justify-start items-center gap-2">
              <div className="py-1 px-2 text-white bg-p2 rounded-lg dark:bg-p1 dark:text-black">
                <p className="font-semibold text-xs">19 Jun</p>
                <p className="text-[10px]">04.32</p>
              </div>
              <div>
                <p className="font-semibold text-sm">Browse By Category</p>
                <p className="text-xs">Language - English, Hindi</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs py-5 border-b border-dashed border-black border-opacity-10 dark:border-color24">
              <div>
                <p>Max Time</p>
                <p className="font-semibold">5 min</p>
              </div>
              <div>
                <p>Max Ques</p>
                <p className="font-semibold">20</p>
              </div>
              <div>
                <p>No of Contest</p>
                <p className="font-semibold">1</p>
              </div>
            </div>
            <div className="pt-5 flex justify-between items-center">
              <div className="flex justify-start items-center gap-1">
                <i className="ph ph-brain text-p2"></i>
                <p className="text-xs">Trivia Quiz</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <i className="ph ph-bell-ringing"></i>
                <i className="ph ph-share-network"></i>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contest;
