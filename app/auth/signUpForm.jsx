"use client";
import CustomCheckbox from "@/components/common/customCheckbox";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const SignUpForm = ({ toggleMode }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showRePassword, setShowRePassword] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col max-h-[calc(100vh-15rem)]">
      <form
        className="flex flex-col justify-between flex-grow"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* grow flex to push the login bottun to the bottom */}
        <div>
          {/* name & lastname */}
          <div className="flex justify-between items-center mt-6 gap-x-4">
            <div>
              <label className="block text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                id="name"
                className={`mt-2 block w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium" htmlFor="lastName">
                Last name
              </label>
              <input
                {...register("lastName", {
                  required: "last name is required",
                })}
                type="text"
                id="name"
                className={`mt-2 block w-full px-4 py-2 border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
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
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="mt-6">
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
            <label className="block text-sm font-medium" htmlFor="rePassword">
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
        {/* this section is been pushed down due to flex-grow propperty from upper elements */}
          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full mt-6 py-3 bg-[#5848A8] text-white rounded-lg shadow-sm"
          >
            Sign up
            <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
          </button>
      </form>
      <div className="mt-4 text-center flex justify-center items-center">
        <div className="text-sm  text-[#362C6B]">
          Already have an account?{" "}
          <button onClick={toggleMode} className="font-semibold text-[#5848A8]">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
