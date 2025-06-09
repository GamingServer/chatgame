import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const BestPlayer = () => {
  const players = [
    {
      rank: 1,
      name: "ShadowStriker",
      xp: 1060,
      flag: "Flags1.png",
      userImg: "user-img-1.png",
      medal: "medal1.svg",
    },
    {
      rank: 2,
      name: "BlazeKnight",
      xp: 660,
      flag: "Flags2.png",
      userImg: "user-img-2.png",
      medal: "medal2.svg",
    },
    {
      rank: 3,
      name: "StormBreaker",
      xp: 920,
      flag: "GB.png",
      userImg: "user-img-3.png",
      medal: "medal3.svg",
    },
  ];

  return (
    <div className="pt-12 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ee9212"
              d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
            />
          </svg>
          <h3 className="text-xl font-semibold">Best Players</h3>
        </div>
        <Link to="#" className="text-p1 font-semibold text-sm">
          See All
        </Link>
      </div>

      <div className="pt-5">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          className="!overflow-visible"
        >
          {players.map((player, index) => (
            <SwiperSlide key={index} className="!w-[220px]">
              <div className="w-full p-4 rounded-xl border border-black border-opacity-10 bg-white shadow2 dark:bg-color9 dark:border-color24">
                <div className="flex justify-between items-center pb-3 border-b border-dashed border-black border-opacity-10">
                  <div className="bg-p2 bg-opacity-10 border border-p2 border-opacity-20 py-1 px-3 flex items-center gap-1 rounded-full dark:bg-bgColor14 dark:border-bgColor16">
                    <i className="ph-fill ph-trophy text-p1"></i>
                    <p className="text-xs font-semibold text-p2 dark:text-white">
                      #{player.rank}
                    </p>
                  </div>
                  <img
                    src={`assets/images/${player.flag}`}
                    alt="flag"
                    className="w-6 h-4 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center items-center pt-4">
                  <div className="relative size-24 flex justify-center items-center">
                    <img
                      src={`assets/images/${player.userImg}`}
                      alt="user"
                      className="size-[68px] rounded-full"
                    />
                    <img
                      src="assets/images/user-progress.svg"
                      alt="progress"
                      className="absolute top-0 left-0"
                    />
                    <img
                      src={`assets/images/${player.medal}`}
                      alt="medal"
                      className="absolute -bottom-1.5 left-9 size-7"
                    />
                  </div>
                  <Link
                    to="#"
                    className="text-xs font-semibold text-color8 dark:text-white pt-4"
                  >
                    {player.name}
                  </Link>
                  <p className="text-color8 pt-1 pb-4 dark:text-white text-xs">
                    {player.xp} XP
                  </p>
                  <button className="text-white text-xs bg-p2 py-1 px-4 rounded-full dark:bg-p1">
                    Follow
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestPlayer;
