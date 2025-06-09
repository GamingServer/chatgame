import React from "react";

const SideBar = () => {
  return (
    <div className="hidden sidebarModal inset-0 z-50">
      <div className="container bg-black bg-opacity-80 h-full overflow-y-auto">
        <div className="w-[330px] bg-slate-50 relative">
          <button className="sidebarModalCloseButton absolute top-3 right-3 border rounded-full border-p1 flex justify-center items-center p-1 text-white">
            <i className="ph ph-x"></i>
          </button>
          <div className="bg-p2 text-white pt-8 pb-4 px-5">
            <div className="flex justify-start items-center gap-3 pb-6 border-b border-color24 border-dashed">
              <img src="assets/images/user_sidebar.png" alt="" />
              <div>
                <p className="text-2xl font-semibold">
                  Jhon Smith <i className="ph-fill ph-seal-check text-p1"></i>
                </p>
                <p className="text-xs">
                  <span className="font-semibold">ID :</span> 6546354651
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-6">
              <div className="flex justify-start items-start gap-2">
                <div className="flex justify-center items-center text-white rounded-full bg-p1 p-1.5">
                  <i className="ph-fill ph-chart-bar"></i>
                </div>
                <div>
                  <p className="text-xs">Rank</p>
                  <p className="text-base font-semibold">420</p>
                </div>
              </div>
              <div className="h-8 w-px bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.99)_49.48%,rgba(255,255,255,0.00)_100%)]"></div>
              <div className="flex justify-start items-start gap-2">
                <div className="flex justify-center items-center text-white rounded-full bg-p1 p-1.5">
                  <i className="ph-fill ph-coins"></i>
                </div>
                <div>
                  <p className="text-xs">Quizio Coin Earned</p>
                  <p className="text-base font-semibold">20</p>
                </div>
              </div>
            </div>
            <p className="pt-5 text-end text-xs">
              <span className="text-p1">* </span>Current Month
            </p>
          </div>
          <div className="flex flex-col">
            {[
              {
                href: "upgrade-premium.html",
                icon: "premium-badge.png",
                label: "Upgrade to Premium",
                isImage: true,
              },
              {
                href: "my-profile.html",
                icon: "ph-user",
                label: "My Profile",
              },
              {
                href: "my-wallet.html",
                icon: "ph-wallet",
                label: "Balance",
                value: "$40",
              },
              {
                href: "earn-rewards.html",
                icon: "ph-users-three",
                label: "Share & Earn",
                value: "$65",
              },
              {
                href: "notification-setting.html",
                icon: "ph-bell",
                label: "Notification",
              },
              {
                href: "settings.html",
                icon: "ph-gear-six",
                label: "Settings",
              },
              { href: "master-medal.html", icon: "ph-medal", label: "Award" },
              {
                href: "earn-rewards.html",
                icon: "ph-share-network",
                label: "Share App",
              },
              {
                href: "top-member.html",
                icon: "ph-users-three",
                label: "Top Members",
              },
              {
                href: "about-quizio.html",
                icon: "ph-info",
                label: "About Us",
              },
              {
                href: "choose-category.html",
                icon: "ph-diamonds-four",
                label: "Category",
              },
              {
                href: "#",
                icon: "ph-lightbulb-filament",
                label: "Suggest a Contest",
              },
              {
                href: "chat.html",
                icon: "ph-chats-teardrop",
                label: "Chat with Us",
              },
              {
                href: "help-center.html",
                icon: "ph-seal-question",
                label: "Help Center",
              },
              { href: "#", icon: "ph-shield", label: "Game Rules" },
            ].map((item, index) => (
              <a
                href={item.href}
                className={`flex justify-between items-center py-3 px-4 border-b border-dashed border-color21 dark:bg-color1 dark:border-color24 ${
                  item.label === "Upgrade to Premium" ? "bg-p1 text-white" : ""
                }`}
                key={index}
              >
                <div className="flex justify-start items-center gap-3">
                  {item.isImage ? (
                    <img src={`assets/images/${item.icon}`} alt="" />
                  ) : (
                    <div
                      className={`flex justify-center items-center p-2 rounded-full border bg-color16 border-color14 text-lg !leading-none text-p2 dark:bg-bgColor14 dark:border-bgColor16 dark:text-p1 ${
                        item.label === "Upgrade to Premium"
                          ? "bg-p1 text-white"
                          : ""
                      }`}
                    >
                      <i className={`ph ${item.icon}`}></i>
                    </div>
                  )}
                  <p
                    className={`font-semibold ${
                      item.label === "Upgrade to Premium"
                        ? "text-white"
                        : "dark:text-white"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
                {item.value ? (
                  <p className="text-p1 font-semibold text-sm">{item.value}</p>
                ) : (
                  <div className="flex justify-center items-center rounded-full text-p2 dark:text-p1">
                    <i className="ph ph-arrow-right"></i>
                  </div>
                )}
              </a>
            ))}
            <button className="flex justify-between items-center py-3 px-4 dark:bg-color1 withdrawModalOpenButton">
              <div className="flex justify-start items-center gap-3">
                <div className="flex justify-center items-center p-2 rounded-full border text-lg !leading-none bg-bgColor14 border-bgColor16 text-p1">
                  <i className="ph ph-sign-out"></i>
                </div>
                <p className="font-semibold text-p1">Logout</p>
              </div>
              <div className="flex justify-center items-center rounded-full text-p1">
                <i className="ph ph-arrow-right"></i>
              </div>
            </button>
          </div>
          <div className="flex justify-between items-center p-4 bg-p2 dark:bg-p1 text-white">
            <p className="text-sm">Rate this App</p>
            <div className="flex justify-start items-center gap-1 text-yellow-400 dark:text-white">
              <i className="ph-fill ph-star-half"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
