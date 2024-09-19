"use client";
import CustomCheckbox from "@/app/common_components/customCheckbox";
import { alertTypes, useAlert } from "@/context/alertContext";
import axiosInstance from "@/lib/axios";
import { API_ROUTES } from "@/utils/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const LoginForm = ({ toggleMode }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [pendingStatus, setPendingStatus] = useState(false);//to indicate submission process
  const [showPassword, setShowPassword] = useState(false); // for password visibility
  const [rememberMe, setRememberMe] = useState(false); // for costum remember password button

  const { triggerAlert } = useAlert(); // to triger alert when sign up successfuly/failed

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      // Set pending status to true to indicate submission process
      setPendingStatus(true);

      const response = await axiosInstance.post(API_ROUTES.login, {
        email,
        password,
        LongOrShortToken:rememberMe,
      });
  
      if (response.status === 200) {
        triggerAlert({
          title: "Welcome back",
          message: "Navigating to app in a moment...",
          type: alertTypes.success,
        });
  
        // Navigate to home page after successful login
        router.push("/main/home");
      }
  
    } catch (error) {
      // Reset pending status in case of an error
      setPendingStatus(false);
      console.error(error);
  
      // Check error response and handle specific status codes
      if (error.response) {
        const { status } = error.response;
  
        // Handle specific error statuses
        if (status === 404) {
          triggerAlert({
            title: "User not found",
            message: "No user found with the provided email address.",
            type: alertTypes.error,
          });
        } else if (status === 406) {
          triggerAlert({
            title: "Incorrect Password",
            message: "The password you entered is incorrect.",
            type: alertTypes.error,
          });
        } else if (status === 500) {
          triggerAlert({
            title: "Server Error",
            message: "An internal server error occurred. Please try again later.",
            type: alertTypes.error,
          });
        } else {
          // Generic error message for other statuses
          triggerAlert({
            title: "Login Failed",
            message: "Something went wrong. Please try again.",
            type: alertTypes.error,
          });
        }
      } else {
        // Handle cases where there is no response (e.g., network errors)
        triggerAlert({
          title: "Network Error",
          message: "Please check your internet connection and try again.",
          type: alertTypes.error,
        });
      }
    }
  };
  

  return (
    <div className="flex flex-col ">
      <form
        className="flex flex-col justify-between max-h-[calc(100vh-15rem)] flex-grow"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* grow flex to push the login button to the bottom */}
        <div>
          {/* Email Input */}
          <div className="mt-6">
            <label className="block text-sm font-medium" htmlFor="email">
              Email.
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

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mt-6">
            <CustomCheckbox
              label={"Remember Me"}
              checked={rememberMe}
              onChange={() => setRememberMe((current) => !current)}
            />
            <Link href="/auth/forgetPassword" className="text-sm font-medium text-[#5848A8]">
              Forget Password?
            </Link>
          </div>
        </div>
        {/* this section is been pushed down due to flex-grow propperty from upper elements */}
          {/* Submit Button */}
          <button
          type="submit"
          className={`relative min-h-12 w-full mt-6 py-3 text-white rounded-lg shadow-sm flex items-center justify-center ${pendingStatus?"bg-[#5848a8d0]":"bg-[#5848A8]"}`}
        >
          {pendingStatus ? <div class="loader"></div> : "Login"}
            <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
          </button>
      </form>
      <div className="my-4 text-center flex justify-center items-center">
        <div className="text-sm  text-[#362C6B]">
          Dont have an account?
          <button onClick={toggleMode} className="font-semibold text-[#5848A8]">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
