"use client";
import LogoSVG from "@/app/common_components/logoSVG";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { alertTypes, useAlert } from "@/context/alertContext";
import { API_ROUTES } from "@/utils/routes";
import axiosInstance from "@/lib/axios";

function ResetPassword({ params }) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [pendingStatus, setPendingStatus] = useState(false); //to indicate submission process
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showRePassword, setShowRePassword] = useState(false); // State for password visibility
  const { triggerAlert } = useAlert(); // to triger alert when sign up successfuly/failed

  const onSubmit = async (data) => {
    try {
      setPendingStatus(true);

      const response = await axiosInstance.get(
        `${API_ROUTES.changePassword}/${params.slug.join("/")}/${data.password}`
      );

      if (response.status === 200) {
        triggerAlert({
          title: "Password Changed",
          message: "Navigating to the app in a moment...",
          type: alertTypes.success,
        });
        // Navigate to home page after successful password reset
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
        if (status === 403) {
          triggerAlert({
            title: "User Not Found",
            message:
              "User not found. Please check the URL Address and try again.",
            type: alertTypes.error,
          });
        } else if (status === 406) {
          triggerAlert({
            title: "Invalid Password",
            message:
              "Password must contain at least one letter, one number, and be at least 6 characters long.",
            type: alertTypes.error,
          });
        } else if (status === 500) {
          triggerAlert({
            title: "Server Error",
            message:
              "An internal server error occurred. Please try again later.",
            type: alertTypes.error,
          });
        } else {
          // Generic error message for other statuses
          triggerAlert({
            title: "Password Reset Failed",
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
          Reset password
        </h3>
        <h6 className="mt-2 text-sm font-light text-white">
          Enter your new password
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
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                          message:
                            "Password must contain at least one letter, one number, and be at least 6 characters long",
                        },
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
                className={`relative min-h-12 w-full mt-6 py-3 text-white rounded-lg shadow-sm flex items-center justify-center ${pendingStatus?"bg-[#5848a8d0]":"bg-[#5848A8]"}`}
                >
                  {pendingStatus ? <div class="loader"></div> : "Reset Password"}
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
