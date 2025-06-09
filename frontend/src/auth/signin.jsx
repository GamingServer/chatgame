import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    console.log(formData);
    

    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await res.json();
    if (res.status !== 200) return alert(data.error);
    localStorage.setItem("user-info", JSON.stringify(data.user));
    window.location.reload();

    // Simulate successful login
    // console.log("Signed In:", formData);
    // navigate("/dashboard"); // Change to your desired route
  };

  return (
    <div className="container min-h-dvh relative overflow-hidden py-8 px-6 dark:text-white dark:bg-color1">
      {/* Background Images & Blurs */}
      <img
        src="assets/images/header-bg-2.png"
        alt=""
        className="absolute top-0 left-0 right-0 -mt-6"
      />
      <div className="absolute top-0 left-0 bg-p3 blur-[145px] h-[174px] w-[149px]"></div>
      <div className="absolute top-40 right-0 bg-[#0ABAC9] blur-[150px] h-[174px] w-[91px]"></div>
      <div className="absolute top-80 right-40 bg-p2 blur-[235px] h-[205px] w-[176px]"></div>
      <div className="absolute bottom-0 right-0 bg-p3 blur-[220px] h-[174px] w-[149px]"></div>

      {/* Page Title */}
      <div className="flex justify-start items-center gap-4 relative z-10">
        <Link
          to="/"
          className="bg-white p-2 rounded-full flex justify-center items-center text-xl dark:bg-color10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#000"
              d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z"
            />
          </svg>
        </Link>
        <h2 className="text-2xl font-bold text-white">Sign In</h2>
      </div>

      {/* Sign In Form */}
      <form onSubmit={handleSubmit} className="relative z-20">
        <div className="bg-white py-8 px-6 rounded-xl mt-12 dark:bg-color10">
          {/* Tabs */}
          <div className="flex justify-between items-center">
            <Link
              to="/signin"
              className="text-center text-xl font-bold text-p2 border-b-2 pb-2 border-p2 w-full dark:text-p1 dark:border-p1"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-center text-xl font-bold text-bgColor18 border-b-2 pb-2 border-bgColor18 w-full dark:text-color18 dark:border-color18"
            >
              Sign Up
            </Link>
          </div>

          {/* Email */}
          <div className="pt-8">
            <p className="text-sm font-bold pb-2">Email</p>
            <div className="flex items-center py-3 px-4 border border-color21 rounded-xl dark:border-color18 gap-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="outline-none bg-transparent text-n600 text-sm placeholder:text-sm w-full placeholder:text-bgColor18 dark:text-color18 dark:placeholder:text-color18"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#a1a1a1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    stroke-dasharray="64"
                    stroke-dashoffset="64"
                    d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="64;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="24"
                    stroke-dashoffset="24"
                    d="M3 6.5l9 5.5l9 -5.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.6s"
                      dur="0.2s"
                      values="24;0"
                    />
                  </path>
                </g>
              </svg>
            </div>
          </div>

          {/* Password */}
          <div className="pt-4">
            <p className="text-sm font-bold pb-2">Password</p>
            <div className="flex items-center py-3 px-4 border border-color21 rounded-xl dark:border-color18 gap-3">
              <input
                type={visible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="*****"
                className="outline-none bg-transparent text-n600 text-sm placeholder:text-sm w-full placeholder:text-bgColor18 dark:text-color18 dark:placeholder:text-color18"
              />
              <button
                onClick={() => setVisible(!visible)}
                type="button"
                className="text-gray-500"
              >
                {visible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#a1a1a1"
                      d="m19.8 22.6l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM12 16q.275 0 .513-.025t.512-.1l-5.4-5.4q-.075.275-.1.513T7.5 11.5q0 1.875 1.313 3.188T12 16m7.3.45l-3.175-3.15q.175-.425.275-.862t.1-.938q0-1.875-1.312-3.187T12 7q-.5 0-.937.1t-.863.3L7.65 4.85q1.025-.425 2.1-.637T12 4q3.775 0 6.725 2.088T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m-4.625-4.6l-3-3q.7-.125 1.288.113t1.012.687t.613 1.038t.087 1.162"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#a1a1a1"
                      d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <Link
            href="forgot-password.html"
            className="text-end text-p2 text-sm font-semibold block pt-2 dark:text-p1"
          >
            Forgot password?
          </Link>

          {/* Submit Button */}
        </div>
        <div className="pt-8">
          <button
            type="submit"
            className="bg-p2 text-white font-bold w-full py-3 rounded-full dark:bg-p1"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
