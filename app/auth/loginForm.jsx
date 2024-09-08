"use client";
import CustomCheckbox from "@/components/common/customCheckbox";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      {/* grow flex to push the login bottun to the bottom */}
      <div className="flex-grow">
        {/* Email Input */}
        <div className="mt-8">
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
            className={`mt-2 block w-full px-4 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Password Input */}
        <div className="mt-8">
          <label className="block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              {...register("password", {
                required: "Password is required",
              })}
              type={showPassword ? "text" : "password"} // Toggling between text and password
              id="password"
              className={`mt-2 block w-full px-4 py-3 border ${
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

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between mt-8">
          <CustomCheckbox
            label={"Remember Me"}
            checked={rememberMe}
            onChange={() => setRememberMe((current) => !current)}
          />
          <a href="#" className="text-sm font-medium text-[#5848A8]">
            Forget Password?
          </a>
        </div>
      </div>
      {/*  */}
      <div className="mb-14">
        {/* Submit Button */}
        <button
          type="submit"
          className="relative w-full  py-3 bg-[#5848A8] text-white rounded-lg shadow-sm"
        >
          Login
          <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
        </button>

        {/* Signup Link */}
        <div className="mt-4 text-center">
          <p className="text-sm  text-[#362C6B]">
            Already have an account?{" "}
            <a href="#" className="font-semibold text-[#5848A8]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
