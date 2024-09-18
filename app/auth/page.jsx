"use client";
import LogoSVG from "@/app/common_components/logoSVG";
import { useState } from "react";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";

function Auth() {
  const modes = { login: "login", signUp: "signUp" };
  const [mode, setMode] = useState(modes.login);
  const toggleMode = () => {
    setMode((current) =>
      current === modes.login ? modes.signUp : modes.login
    );
  };
  return (
    <div className="h-screen overflow-y-scroll no-scrollbar flex flex-col">
      {/* header banner */}
      <div className="bg-gradient-to-l from-[#201348] to-[#0D0D1B] px-5 py-6">
        <LogoSVG />
        <h3 className="text-grad mt-4 text-2xl font-bold bg-gradient-to-r from-white to-[#ffffff98] inline-block text-transparent bg-clip-text">
          {/* adding gradiant to text */}
          Get started now
        </h3>
        <h6 className="mt-2 text-sm font-light text-white">
          Create an account or log in to app.
        </h6>
      </div>
      {/* body */}
      <div className="px-5 py-6 relative">
        {/* Login/sign up sitcher */}
        <div className="relative grid grid-cols-2 text-center bg-[#EFEFEF] rounded-xl p-0.5 text-sm font-medium">
          <button
            onClick={()=>setMode(modes.login)}
            className="rounded-lg py-3 transition-colors z-10"
          >
            Log in
          </button>
          <button
            onClick={()=>setMode(modes.signUp)}
            className="rounded-lg py-3 transition-colors z-10"
          >
            Sing up
          </button>
          <div
            className={`absolute rounded-lg top-1 bottom-1 left-1 w-[calc(50%-0.25rem)]  bg-white transition-transform duration-500 ease-in-out ${
              mode === modes.signUp ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>{" "}
        </div>
        {/* Forms => transform on x axis when switch betweenn sign up and login */}
        <div className="w-full  no-scrollbar overflow-x-hidden relative">
          <div
            className={`grid grid-cols-2 w-[200%] transition-transform duration-500 ease-in-out ${
              mode === modes.signUp && "transform -translate-x-1/2"
            }`}
          >
            <LoginForm toggleMode={toggleMode} />

            <SignUpForm toggleMode={toggleMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
