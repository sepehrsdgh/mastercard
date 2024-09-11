"use client";
import LogoSVG from "@/components/common/logoSVG";
import React from "react";
import LockSVG from "./lockSVG";
import { useForm } from "react-hook-form";
import Link from "next/link";

function ForgetPassword() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
    location.assign("/auth/resetPassword");
      };
  return (
    <div className="h-screen overflow-y-scroll flex flex-col">
      {/* header banner */}
      <div className="bg-gradient-to-l from-[#201348] to-[#0D0D1B] px-5 py-6">
        <LogoSVG />
        <h3 className="text-grad mt-4 text-2xl font-bold bg-gradient-to-r from-white to-[#ffffff98] inline-block text-transparent bg-clip-text">
          {/* adding gradiant to text */}
          Forget password
        </h3>
        <h6 className="mt-2 text-sm font-light text-white">
          Enter the email address you used to register with
        </h6>
      </div>
      {/* body */}
      <div className="px-5 py-6 relative h-[calc(100%-16.5rem)]">
        {/* Login/sign up sitcher */}
        <div className="flex justify-center">
          <LockSVG />
        </div>
    
        {/* Forms => transform on x axis when switch betweenn sign up and login */}
        <div className="h-full">
          <p className="font-bold mt-3 text-sm text-center">Enter your email for instructions</p>
          <div className="flex flex-col h-full">
      <form
        className="flex flex-col justify-between h-full max-h-[calc(100vh-24rem)]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* grow flex to push the login button to the bottom */}
        <div className="flex-grow">
          {/* Email Input */}
          <div className="mt-6">
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              className={`mt-2 block w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
            />
            {errors.email && (
              <span className="text-red-500 mt-2 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>  
        </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full  py-3 bg-[#5848A8] text-white rounded-lg shadow-sm"
          >
            Send instructions
            <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
          </button>
      </form>
      <div className="my-4 text-center flex justify-center items-center">
          <Link href={"/auth"} className="text-base">
            Back to sign in
          </Link>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
