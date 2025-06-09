import { Link, Navigate, useNavigate } from "react-router-dom";
import { useComponentContext } from "../context/component.context";
import { useAuthContext } from "../context/auth.context";
const UpcomingEvents = () => {
    const { selectedCategory, setSelectedCategory } = useComponentContext();
    const { authUser } = useAuthContext();
    const navigate = useNavigate();
    if (!selectedCategory) {
        return <Navigate to="/home" />;
    }

    const {
        date,
        time,
        title,
        language,
        spotsLeft,
        spotsTotal,
        entry,
        played
    } = selectedCategory;

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file || !authUser?.username) return;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("username", authUser.username);
        formData.append("category", title);
        try {
            fetch(`/api/game/uploadPoints/${authUser.username}/${title}`, {
                method: "POST",

                body: formData
            }).then(() => {
                setSelectedCategory(null);
                navigate('/home')
            })
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className="container min-h-dvh relative overflow-hidden py-8 dark:text-white dark:bg-color1">
                {/* Background and Blur Effects */}
                <img src="assets/images/header-bg-1.png" alt="" className="absolute top-0 left-0 right-0 -mt-12" />
                <div className="absolute top-0 left-0 bg-p3 blur-[145px] h-[174px] w-[149px]" />
                <div className="absolute top-40 right-0 bg-[#0ABAC9] blur-[150px] h-[174px] w-[91px]" />
                <div className="absolute top-80 right-40 bg-p2 blur-[235px] h-[205px] w-[176px]" />
                <div className="absolute bottom-0 right-0 bg-p3 blur-[220px] h-[174px] w-[149px]" />

                <div className="relative z-10 px-6">
                    {/* Header */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            <Link
                                to="/home"
                                onClick={() => setSelectedCategory(null)}
                                className="bg-white size-8 rounded-full flex justify-center items-center text-xl dark:bg-color10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24">
                                    <path fill="#000" fillRule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z" />
                                </svg>
                            </Link>
                            <h2 className="text-2xl font-semibold text-white">Quiz Details</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-white border border-color24 p-2 rounded-full bg-color24">
                                <i className="ph ph-paper-plane-tilt" />
                            </div>
                            <div className="relative">
                                <button className="border border-color24 p-2 rounded-full bg-color24 quizDetailsMoreOptionsModalOpenButton">
                                    <i className="ph ph-dots-three text-white" />
                                </button>
                                <div className="absolute top-12 right-0 z-40 modalClose duration-500 bg-white dark:bg-color9 p-5 rounded-xl shadow6 quizDetailsMoreOptionsModal">
                                    <div className="flex items-center gap-3 pb-3 border-b border-dashed border-color21">
                                        <div className="text-p2 border p-2 rounded-full bg-color14 text-sm dark:text-white dark:bg-color24 dark:border-color18">
                                            <i className="ph ph-paper-plane-tilt" />
                                        </div>
                                        <p className="text-sm">Share</p>
                                    </div>
                                    <a href="generate-qr-code.html" className="flex items-center gap-3 pt-3">
                                        <div className="text-p2 border p-2 rounded-full bg-color14 text-sm dark:text-white dark:bg-color24 dark:border-color18">
                                            <i className="ph ph-paper-plane-tilt" />
                                        </div>
                                        <p className="text-sm text-nowrap">Generate PIN & QR Code</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quiz Card */}
                    <div className="rounded-2xl overflow-hidden shadow2 mt-16">
                        <div className="p-5 bg-white dark:bg-color10">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="py-1 px-2 text-white bg-p2 rounded-lg dark:bg-p1 dark:text-black">
                                        <p className="font-semibold text-xs">{date}</p>
                                        <p className="text-[10px]">{time}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-xs">{title}</p>
                                        <p className="text-xs">Language - {language}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="text-p2 text-[10px] py-0.5 px-1 bg-p2 bg-opacity-20 dark:text-p1 dark:bg-color24 rounded-md">05</p>
                                    <p className="text-p2 text-base font-semibold dark:text-p1">:</p>
                                    <p className="text-p2 text-[10px] py-0.5 px-1 bg-p2 bg-opacity-20 dark:text-p1 dark:bg-color24 rounded-md">14</p>
                                    <p className="text-p2 text-base font-semibold dark:text-p1">:</p>
                                    <p className="text-p2 text-[10px] py-0.5 px-1 bg-p2 bg-opacity-20 dark:text-p1 dark:bg-color24 rounded-md">20</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center gap-2 text-xs py-3 mt-2">
                                <p>{spotsLeft} left</p>
                                <div className={`relative bg-p2 bg-opacity-10 h-1 w-full rounded-full dark:bg-p1 dark:bg-opacity-10 after:absolute after:h-1  after:bg-p2 after:dark:bg-p1 after:rounded-full ${spotsLeft === 0 ? 'after:w-full' : `after:w-${(spotsLeft / spotsTotal) * 100}%`}`} />
                                <p>{spotsTotal} spots</p>
                            </div>
                            {selectedCategory.played.length > 0 ? (<p className="py-3 text-center bg-p2 rounded-full text-sm font-semibold text-white block w-full">
                                You already played this quiz
                            </p>) : (<label className="py-3 text-center bg-p2 rounded-full text-sm font-semibold text-white block w-full cursor-pointer">
                                Send Image
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e)}
                                />
                            </label>)}

                            <div className="pt-5 flex justify-between items-center border-t border-dashed border-black dark:border-color24 border-opacity-10 mt-5">
                                <div className="flex items-center gap-1">
                                    <i className="ph ph-trophy text-p1" />
                                    <p className="text-xs">1st Price - $2,499</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="ph ph-share-network" />
                                    <button className="setReminderModalOpenButton">
                                        <i className="ph ph-bell-ringing" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quiz Description */}
                    <div className="py-4 px-5 rounded-2xl border border-color21 bg-white mt-8 dark:bg-color11 quiz-details">
                        <p className="font-semibold pb-3 border-b border-dashed border-color21 dark:border-color24">
                            Quiz Details
                        </p>
                        <div className="flex items-center gap-2 pt-3">
                            <div className="flex justify-center items-center text-white bg-p1 p-2 rounded-full dark:bg-p1 icon">
                                <i className="ph ph-scroll" />
                            </div>
                            <p className="text-sm text-color5 dark:text-bgColor5 detailsShort">
                                Challenge your knowledge with our{" "}
                                <button className="text-p2 underline dark:text-p1 quizDetailsShowButton">More</button>
                            </p>
                        </div>
                    </div>
                </div>
                {selectedCategory.played.length > 0 && (
                    <div className="flex justify-center items-center pt-10 flex-col gap-2">
                        <img src={"http://localhost:8080" + selectedCategory.played[0].image} ></img>
                        <p>This is Your uploaded image</p>
                    </div>
                )}
            </div>

            {/* Confirmation Modal */}
            {/* <div className="hidden inset-0 z-40 confirmationModal">
                <div className="container bg-black dark:bg-white dark:bg-opacity-30 bg-opacity-40 flex justify-center items-center h-full px-6">
                    <div className="bg-white dark:bg-color10 p-5 rounded-xl w-full dark:text-white">
                        <div className="flex justify-between items-center pb-4">
                            <p className="text-lg font-semibold">Confirmation</p>
                            <button className="p-2 rounded-full border confirmationModalCloseButton border-color16 dark:border-bgColor16">
                                <i className="ph ph-x" />
                            </button>
                        </div>
                        <div className="py-4 border-y border-dashed border-color21 dark:border-color24">
                            <div className="flex justify-between items-center">
                                <p className="text-color5 dark:text-bgColor5">Entry Fee :</p>
                                <p className="font-semibold">{entry}</p>
                            </div>
                            <div className="flex justify-between items-center pt-3">
                                <p className="text-color5 dark:text-bgColor5">Joining Offer :</p>
                                <p className="font-semibold">{entry}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-end py-4">
                            <div>
                                <p className="font-semibold">To Pay :</p>
                                <p className="text-xs text-color5 dark:text-bgColor5">inclusive of taxes</p>
                            </div>
                            <p className="text-sm font-semibold text-p2 dark:text-p1">{entry}</p>
                        </div>
                        <a href="quiz-1.html" className="py-3 text-center bg-p2 rounded-full text-sm font-semibold text-white block w-full dark:bg-p1">
                            Join Now {entry}
                        </a>
                        <div className="flex items-start gap-2 pt-2">
                            <div className="text-lg">
                                <i className="ph ph-check-square" />
                            </div>
                            <p className="text-xs text-color5 dark:text-bgColor5">
                                You agree to all terms & conditions and agree to be contacted by the company and partners.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}



        </>
    );
};

export default UpcomingEvents;
