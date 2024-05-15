import React from "react";
import registerImg from "images/registerImg.png";

export default function Register() {
  return (
    <div className="w-full h-screen relative flex flex-row items-center justify-center">
      <div
        className="h-full w-full bg-cover bg-center absolute left-0 top-0 blur-lg z-[-1]"
        style={{ backgroundImage: `url(${registerImg})` }}
      />
      <div className="w-1/2 h-4/6 flex flex-row shadow-xl">
        <div
          className="flex-[1_0_0%]  bg-cover bg-center"
          style={{ backgroundImage: `url(${registerImg})` }}
        ></div>
        <div className="flex-[1_0_0%] flex flex-col items-center gap-3 pt-28 bg-[#F3CA52] font-mono">
          <h1 className="font-semibold text-[#fff] text-2xl">Register</h1>
          <div className="w-64 h-8 rounded-xl">
            <input
              className="h-full w-full outline-none border-none pl-2 rounded-xl"
              type="text"
              placeholder="User name"
            />
          </div>
          <div className="w-64 h-8 rounded-xl">
            <input
              className="h-full w-full outline-none border-none pl-2 rounded-xl"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-10">
            <button className="p-1 px-2 rounded-xl bg-[#F4538A] text-[#FFF] font-semibold hover:bg-[#FFB5DA] transition-colors duration-75 active:bg-[#FF3EA5]">
              Sign up
            </button>
            <a href="#" className="underline text-[#fff]">
              back to login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
