import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link, Navigate } from "react-router-dom";
import { useComponentContext } from "../../context/component.context";
import { useAuthContext } from "../../context/auth.context";
const UpcomingEvent = () => {
  const { authUser } = useAuthContext();
  const { selectedCategory, setSelectedCategory } = useComponentContext();

  const [rawData, setRawData] = useState([]);
  useEffect(() => {
    fetch('/api/category/getforuser/' + authUser?.username).then(res => res.json()).then(data => setRawData(data));
  }, [])
  if (selectedCategory) {
    return <Navigate to={'/upcomingevents'} />
  }

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" });
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return {
      date: `${day} ${month}`,
      time: `${hours}.${minutes}`,
    };
  };

  const contests = rawData.map(item => {
    const { date, time } = formatDate(item.createdAt);

    return {
      date,
      time,
      title: `${item.category}`,
      language: "English", // hardcoded, or change if you have a field
      spotsLeft: 100 - item.roundPlayedByPlayers, // or any logic
      spotsTotal: 100, // you can use MaxPlayerLimit if > 0
      entry: `$${item.point.toFixed(2)}`,
      played: item.played
    };
  });



  return (
    <div className="pt-12 px-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Upcoming Contest</h3>
        <Link
          to="#"
          className="text-p1 font-semibold text-sm"
        >
          See All
        </Link>
      </div>

      <div className="pt-5">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          className="!overflow-visible"
        >
          {contests.map((contest, index) => (
            <SwiperSlide key={index} className="!w-[260px]">
              <button

                onClick={() => {
                  setSelectedCategory(contest)
                }}
                className="rounded-2xl overflow-hidden shadow2 border border-color21 bg-white dark:bg-color10 block"
              >
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-start">
                      <div className="py-1 px-2 text-white bg-p2 rounded-lg dark:bg-p1 dark:text-black text-center">
                        <p className="font-semibold text-xs">{contest.date}</p>
                        <p className="text-[10px]">{contest.time}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-xs">{contest.title}</p>
                        <p className="text-xs">Language - {contest.language}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 items-center">
                      <p className="text-p2 text-[10px] bg-p2 bg-opacity-20 py-0.5 px-1 rounded-md dark:text-p1 dark:bg-color24">
                        05
                      </p>
                      <p className="text-p2 text-base font-semibold dark:text-p1">
                        :
                      </p>
                      <p className="text-p2 text-[10px] bg-p2 bg-opacity-20 py-0.5 px-1 rounded-md dark:text-p1 dark:bg-color24">
                        14
                      </p>
                      <p className="text-p2 text-base font-semibold dark:text-p1">
                        :
                      </p>
                      <p className="text-p2 text-[10px] bg-p2 bg-opacity-20 py-0.5 px-1 rounded-md dark:text-p1 dark:bg-color24">
                        20
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs pt-5">
                    <div className="flex gap-2">
                      <p>Max Time</p>
                      <p className="font-semibold">- 5 min</p>
                    </div>
                    <div className="flex gap-3">
                      <p>Max Ques</p>
                      <p className="font-semibold">- 20</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs py-3">
                    <p>{contest.spotsLeft} left</p>
                    <div className="relative flex-1 h-1 bg-p2 bg-opacity-10 dark:bg-p1 dark:bg-opacity-10 rounded-full">
                      <div
                        className={`relative bg-p2 bg-opacity-10 h-1 w-full rounded-full dark:bg-p1 dark:bg-opacity-10 after:absolute after:h-1  after:bg-p2 after:dark:bg-p1 after:rounded-full ${contest.spotsLeft === 0 ? 'after:w-full' : `after:w-${(contest.spotsLeft / contest.spotsTotal) * 100}%`}`}

                      />
                    </div>
                    <p>{contest.spotsTotal} spots</p>
                  </div>

                  <div className="border-b border-dashed border-black border-opacity-10 dark:border-color24 pb-5 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-p1 rounded-full text-white">
                        <i className="ph ph-trophy"></i>
                      </div>
                      <div>
                        <p>Price Pool</p>
                        <p className="font-semibold">$100</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-white text-xs bg-p2 py-1 px-4 rounded-full dark:bg-p1">
                        Join Now
                      </p>
                      <div>
                        <p>Entry</p>
                        <p className="font-semibold">{contest.entry}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <i className="ph ph-brain text-p2"></i>
                      <p className="text-xs">
                        {contest.title.includes("Language")
                          ? "Language Quiz"
                          : "Trivia Quiz"}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <i className="ph ph-bell-ringing"></i>
                      <i className="ph ph-share-network"></i>
                    </div>
                  </div>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpcomingEvent;