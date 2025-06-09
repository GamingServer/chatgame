import React from "react";

const CategorySlider = () => {
  return (
    <div className="relative">
      <p className="text-white text-center pt-5 text-sm font-semibold">
        Browse By Category
      </p>
      <div className="absolute -left-[53%] -top-[620px] min-[370px]:-top-[650px] min-[380px]:-top-[680px] min-[400px]:-top-[720px] min-[420px]:-top-[750px]">
        <div className="flex justify-around items-center rounded-full relative rotate-0 circleSliders duration-700 max-[430px]:size-[209vw] size-[900px]">
          <a
            href="#"
            className="flex flex-col justify-center items-center text-center gap-3 absolute -left-[1%] bottom-[35%] rotate-[58deg]"
          >
            <img src="assets/images/icon1.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">Puzzle Quiz</p>
          </a>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute left-[2%] bottom-[24%] rotate-[58deg]">
            <img src="assets/images/icon2.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">Music Quiz</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute left-[7%] bottom-[14.5%] rotate-[58deg]">
            <img src="assets/images/icon3.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">
              Language Quiz
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute left-[15.5%] bottom-[7.5%] rotate-[58deg]">
            <img src="assets/images/icon4.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">
              Picture Quiz
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-3 absolute left-[29%] bottom-0">
            <img src="assets/images/icon1.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">Music Quiz</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute left-[39.5%] -bottom-[3%]">
            <img src="assets/images/icon3.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">Puzzle Quiz</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute right-[40.5%] -bottom-[3%]">
            <img src="assets/images/icon4.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">
              Language Quiz
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute right-[31%] bottom-0">
            <img src="assets/images/icon2.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">
              Picture Quiz
            </p>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-3 absolute right-[16.5%] bottom-[6.5%] rotate-[-58deg]">
            <img src="assets/images/icon2.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">Puzzle Quiz</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute right-[8%] bottom-[13%] rotate-[-58deg]">
            <img src="assets/images/icon4.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">Music Quiz</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute right-[2%] bottom-[23.5%] rotate-[-58deg]">
            <img src="assets/images/icon2.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">
              Picture Quiz
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-3 absolute right-0 bottom-[34%] rotate-[-58deg]">
            <img src="assets/images/icon1.png" alt="" className="" />
            <p className="text-xs font-semibold dark:text-white">Puzzle Quiz</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center gap-1 flex-col pt-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202">
          <path
            d="M76.388 165.94C75.9671 167.043 74.7305 167.599 73.6407 167.145C70.8225 165.972 68.0826 164.618 65.4379 163.094C64.4153 162.504 64.1052 161.184 64.7252 160.18V160.18C65.3453 159.175 66.6606 158.867 67.6844 159.454C70.0989 160.84 72.5974 162.074 75.1655 163.149C76.2544 163.605 76.8088 164.837 76.388 165.94V165.94Z"
            fill="#141414"
            fillOpacity="0.16"
            id="itemLeft"
          />
          <path
            d="M124.225 166.48C124.629 167.59 124.057 168.82 122.936 169.19C110.033 173.452 96.1783 173.936 83.0093 170.584C81.8653 170.293 81.2096 169.106 81.535 167.971V167.971C81.8604 166.836 83.0434 166.184 84.1878 166.473C96.4884 169.579 109.42 169.127 121.474 165.171C122.595 164.803 123.821 165.371 124.225 166.48V166.48Z"
            fill="#FF710F"
            id="itemCenter"
          />

          <path
            d="M141.502 157.326C142.203 158.276 142.002 159.617 141.031 160.288C138.52 162.024 135.9 163.597 133.187 164.996C132.138 165.537 130.86 165.084 130.35 164.02V164.02C129.84 162.955 130.291 161.682 131.339 161.139C133.811 159.858 136.2 158.424 138.493 156.845C139.465 156.176 140.802 156.376 141.502 157.326V157.326Z"
            fill="#141414"
            fillOpacity="0.16"
            id="itemRight"
          />
        </svg>
      </div>
    </div>
  );
};

export default CategorySlider;
