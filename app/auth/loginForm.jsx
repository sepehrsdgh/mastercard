"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Importing icons from react-icons

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Email Input */}
      <div>
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
              <AiFillEyeInvisible size={24} />
            ) : (
              <AiFillEye size={24} />
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
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <input
            {...register("remember")}
            id="remember"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember Me
          </label>
        </div>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
          Forget Password?
        </a>
      </div>
      <div className="absolute bottom-8 right-5 left-5">
        {/* Submit Button */}
        <button
          type="submit"
          className="relative w-full py-3 bg-[#5848A8] text-white rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
        >
          Login
          <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
        </button>

        {/* Signup Link */}
        <div className="mt-4 text-center">
          <p className="text-sm font-semibold">
            Already have an account?{" "}
            <a href="#" className="text-[#5848A8]">
              Log in
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
