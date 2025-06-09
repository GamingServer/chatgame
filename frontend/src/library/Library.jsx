import React from "react";
import BottemNevigation from "../Home/components/BottemNevigation";

const Library = () => {
  return (
    <>
      <div className="container min-h-dvh relative overflow-hidden py-8 dark:text-white dark:bg-color1">
        {/* Absolute Items Start */}
        <img
          src="assets/images/header-bg-1.png"
          alt=""
          className="absolute top-0 left-0 right-0 -mt-20"
        />
        <div className="absolute top-0 left-0 bg-p3 blur-[145px] h-[174px] w-[149px]" />
        <div className="absolute top-40 right-0 bg-[#0ABAC9] blur-[150px] h-[174px] w-[91px]" />
        <div className="absolute top-80 right-40 bg-p2 blur-[235px] h-[205px] w-[176px]" />
        <div className="absolute bottom-0 right-0 bg-p3 blur-[220px] h-[174px] w-[149px]" />
        {/* Absolute Items End */}
        {/* Page Title Start */}
        <div className="relative z-10 mb-20">
          <div className="flex justify-between items-center gap-4 px-6">
            <div className="flex justify-start items-center gap-4">
              <h2 className="text-2xl font-semibold text-white">Library</h2>
            </div>
          </div>
          {/* Page Title End */}
          {/* Search Box Start */}
          <div className="flex justify-between items-center gap-3 pt-8 px-6">
            <div className="flex justify-start items-center gap-3 bg-color24 border border-color24 p-4 rounded-full text-white w-full">
              <i className="ph ph-magnifying-glass" />
              <input
                type="text"
                placeholder="Search Contest"
                className="bg-transparent outline-none placeholder:text-white w-full text-xs"
              />
            </div>
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
              </svg>
            </div>
          </div>
          {/* Search Box End */}
          <div className="userProfileTab pt-24 px-6">
            <ul className="flex justify-start items-center gap-3 tab-button">
              <li
                id="tabOne"
                className="tabButton activeTabButton cursor-pointer"
              >
                MY Quizio
              </li>
              <li id="tabTwo" className="tabButton cursor-pointer">
                Favorites
              </li>
              <li id="tabThree" className="tabButton cursor-pointer">
                Collaboration
              </li>
            </ul>
            <div className="pt-8">
              <div className="tab-content activeTab" id="tabOne_data">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex justify-start items-start gap-2 bg-white px-3 pt-3 pb-6 rounded-xl dark:bg-color9">
                    <img
                      src="assets/images/icon1.png"
                      alt=""
                      className="size-12"
                    />
                    <div className="">
                      <p className="text-sm font-semibold">Music Quiz</p>
                      <p className="text-xs text-p2 pt-1 dark:text-p1">
                        Que: 150
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-2 bg-white px-3 pt-3 pb-6 rounded-xl dark:bg-color9">
                    <img
                      src="assets/images/icon2.png"
                      alt=""
                      className="size-12"
                    />
                    <div className="">
                      <p className="text-sm font-semibold">Picture Quiz</p>
                      <p className="text-xs text-p2 pt-1 dark:text-p1">
                        Que: 150
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-2 bg-white px-3 pt-3 pb-6 rounded-xl dark:bg-color9">
                    <img
                      src="assets/images/icon3.png"
                      alt=""
                      className="size-12"
                    />
                    <div className="">
                      <p className="text-sm font-semibold">Music Quiz</p>
                      <p className="text-xs text-p2 pt-1 dark:text-p1">
                        Que: 150
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start items-start gap-2 bg-white px-3 pt-3 pb-6 rounded-xl dark:bg-color9">
                    <img
                      src="assets/images/icon4.png"
                      alt=""
                      className="size-12"
                    />
                    <div className="">
                      <p className="text-sm font-semibold">Science Quiz</p>
                      <p className="text-xs text-p2 pt-1 dark:text-p1">
                        Que: 150
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content hiddenTab" id="tabTwo_data">
                <div className="flex flex-col gap-5">
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img1.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Test Your Knowledge....</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <p className="text-xs text-color5 flex justify-start items-center gap-1 dark:text-color18">
                        <i className="ph ph-users-three text-base !leading-none" />
                        Public
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img2.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Fun Challenges for Your.</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <p className="text-xs text-color5 flex justify-start items-center gap-1 dark:text-color18">
                        <i className="ph ph-users-three text-base !leading-none" />
                        Public
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img1.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Test Your Knowledge....</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <p className="text-xs text-color5 flex justify-start items-center gap-1 dark:text-color18">
                        <i className="ph ph-users-three text-base !leading-none" />
                        Public
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img3.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Unveil Your Knowledge...</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <p className="text-xs text-color5 flex justify-start items-center gap-1 dark:text-color18">
                        <i className="ph ph-users-three text-base !leading-none" />
                        Public
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img4.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Competitive Quizzes for..</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <p className="text-xs text-color5 flex justify-start items-center gap-1 dark:text-color18">
                        <i className="ph ph-users-three text-base !leading-none" />
                        Public
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content hiddenTab" id="tabThree_data">
                <div className="flex flex-col gap-5">
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img3.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Test Your Knowledge....</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <div className="text-xs text-color5 flex justify-start items-center gap-2 dark:text-color18">
                        <div className="flex justify-start items-center">
                          <div className="rounded-full bg-white p-0.5">
                            <img
                              src="assets/images/user-img-1.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-2.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-3.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-4.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-5.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <p>Public</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img1.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Engaging Quizzers for....</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <div className="text-xs text-color5 flex justify-start items-center gap-2 dark:text-color18">
                        <div className="flex justify-start items-center">
                          <div className="rounded-full bg-white p-0.5">
                            <img
                              src="assets/images/user-img-1.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-2.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-3.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-4.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-5.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <p>Public</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img5.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Explore, Learn, and...</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <div className="text-xs text-color5 flex justify-start items-center gap-2 dark:text-color18">
                        <div className="flex justify-start items-center">
                          <div className="rounded-full bg-white p-0.5">
                            <img
                              src="assets/images/user-img-1.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-2.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-3.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-4.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-5.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <p>Public</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img4.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">
                        Dive into Intellectual....
                      </p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <div className="text-xs text-color5 flex justify-start items-center gap-2 dark:text-color18">
                        <div className="flex justify-start items-center">
                          <div className="rounded-full bg-white p-0.5">
                            <img
                              src="assets/images/user-img-1.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-2.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-3.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-4.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-5.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <p>Public</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-4 border border-color21 dark:bg-color9 dark:border-color7">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src="assets/images/library-favourite-img2.png"
                        alt=""
                        className="h-[100px] w-[140px] object-cover"
                      />
                      <p className="text-white bg-p1 absolute bottom-2 right-2 text-xs px-2 py-1 rounded-md">
                        10 Qs
                      </p>
                    </div>
                    <div className="">
                      <p className="font-semibold">Guess the Name of Riva..</p>
                      <p className="text-bgColor18 text-xs flex justify-start items-center gap-1 pt-3 pb-2 dark:text-color18">
                        Today
                        <i className="ph-fill ph-dot-outline text-p1 text-xl !leading-none" />
                        600 plays
                      </p>
                      <div className="text-xs text-color5 flex justify-start items-center gap-2 dark:text-color18">
                        <div className="flex justify-start items-center">
                          <div className="rounded-full bg-white p-0.5">
                            <img
                              src="assets/images/user-img-1.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-2.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-3.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-4.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                          <div className="rounded-full bg-white p-0.5 -ml-2">
                            <img
                              src="assets/images/user-img-5.png"
                              alt=""
                              className="size-6 object-cover rounded-full"
                            />
                          </div>
                        </div>
                        <p>Public</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Tab Buttons Start */}
      {/* <BottemNevigation /> */}
            <BottemNevigation />

    </>
  );
};

export default Library;
