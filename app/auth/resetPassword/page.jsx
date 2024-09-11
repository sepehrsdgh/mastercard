"use client";
import LogoSVG from "@/components/common/logoSVG";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function ResetPassword() {
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
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showRePassword, setShowRePassword] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword((prevState) => !prevState);
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
      <div className="px-5 py-6 relative h-[100%]">
        {/* Forms => transform on x axis when switch betweenn sign up and login */}
        <div className="h-full">
          <div className="flex flex-col h-full">
            <form
              className="flex flex-col h-full max-h-[calc(100vh-17rem)]"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* grow flex to push the login button to the bottom */}
              <div className="flex-grow">
                {/* Email Input */}
                <div className="mt-4">
                  <label
                    className="block text-sm font-medium"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("password", {
                        required: "Password is required",
                      })}
                      type={showPassword ? "text" : "password"} // Toggling between text and password
                      id="password"
                      className={`mt-2 block w-full px-4 py-2 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <IoEyeOffOutline size={24} />
                      ) : (
                        <IoEyeOutline size={24} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-500 text-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                {/* Re password Input */}
                <div className="mt-6">
                  <label
                    className="block text-sm font-medium"
                    htmlFor="rePassword"
                  >
                    Re password
                  </label>
                  <div className="relative">
                    <input
                      {...register("rePassword", {
                        required: "rePassword is required",
                        validate: (val) => {
                          if (watch("password") != val) {
                            return "Your passwords do no match";
                          }
                        },
                      })}
                      type={showRePassword ? "text" : "password"} // Toggling between text and password
                      id="rePassword"
                      className={`mt-2 block w-full px-4 py-2 border ${
                        errors.rePassword ? "border-red-500" : "border-gray-300"
                      } rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                      onClick={toggleRePasswordVisibility}
                    >
                      {showRePassword ? (
                        <IoEyeOffOutline size={24} />
                      ) : (
                        <IoEyeOutline size={24} />
                      )}
                    </button>
                  </div>
                  {errors.rePassword && (
                    <span className="text-red-500 text-sm">
                      {errors.rePassword.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative w-full  py-3 bg-[#5848A8] text-white rounded-lg shadow-sm"
              >
                Reset Password
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

export default ResetPassword;
