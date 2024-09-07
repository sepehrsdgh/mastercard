"use client";
import LogoSVG from "@/components/common/logoSVG";
import React, { useState } from "react";
import LoginForm from "./loginForm";
import SignUpForm from "./signUpForm";

function Auth() {
  const modes = { login: "login", signUp: "signUp" };
  const [mode, setMode] = useState(modes.login);

  return (
    <div className="bg-white h-screen">
      {/* header banner */}
      <div className="bg-gradient-to-l from-[#201348] to-[#0D0D1B] px-5 py-6">
        <div className="mt-4">
          <LogoSVG />
        </div>
        <h3 className="mt-4 text-2xl font-bold bg-gradient-to-r from-white to-[#ffffff98] inline-block text-transparent bg-clip-text">
          {/* adding gradiant to text */}
          Get started now
        </h3>
        <h6 className="mt-2 text-sm font-light text-white">
          Create an account or log in to app.
        </h6>
      </div>
      {/* headerbanner */}
      {/* body */}
      <div className="px-5 py-4">
        {/* Login/sign up sitcher */}
        <div className="relative grid grid-cols-2 text-center bg-[#EFEFEF] rounded-xl p-2 text-sm font-medium">
          <button
            onClick={() => setMode(modes.login)}
            className="rounded-lg py-3 transition-colors z-10"
          >
            Log in
          </button>
          <button
            onClick={() => setMode(modes.signUp)}
            className="rounded-lg py-3 transition-colors z-10"
          >
            Sing up
          </button>
          <div
            className={`absolute rounded-lg top-2 bottom-2 left-2 w-[calc(50%-0.5rem)]  bg-white transition-transform duration-500 ease-in-out ${
              mode === modes.signUp ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>{" "}
        </div>
        {/* Login/sign up sitcher */}
      {/* Forms */}
<div className="mt-6">
  {mode===modes.login?<LoginForm />:<SignUpForm />}
</div>
      {/* Forms */}
      </div>
      {/* body */}
    </div>
  );
}

export default Auth;
