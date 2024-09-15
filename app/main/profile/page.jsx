"use client"
import { useState } from "react";
import UpperHeader from "../common-componnets/upperHeader";
import { useForm } from "react-hook-form";
import { IoCopyOutline, IoEyeOffOutline, IoEyeOutline, IoLogOutOutline, IoShareOutline } from "react-icons/io5";

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false)
  return (<div className="min-h-screen pb-20">
  <UpperHeader pageName={"Profile"} />
    <div className="p-5">
      <div className="bg-white p-4 rounded-xl">
        <div className="text-center font-bold text-sm">Account ID</div>
        <div className="mt-3 bg-[#F6F6F6] text-sm rounded-lg py-3 text-center">XoUPdAabwwdL2yvt3ftQtwrKiqeXje</div>
        <div className="mt-4 flex justify-between gap-6 items-center font-semibold text-sm text-[#5848A8]">
          <button className="py-3 w-full max-w-36 flex justify-center items-center gap-2 bg-[#5848A80f] rounded-lg"><IoCopyOutline size={20}/>Copy</button>
          <button className="py-3 w-full max-w-36 flex justify-center items-center gap-2 bg-[#5848A80f] rounded-lg"><IoShareOutline size={20}/>Share</button>
        </div>
      </div>
      <form
        className="flex flex-col justify-between flex-grow"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className="mt-6">
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
            <div className="mt-6">
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
                onClick={()=>setShowPassword((currentSatate)=>!currentSatate)}
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
        </div>
          <button
            type="submit"
            className="relative w-full mt-6 py-3 bg-[#5848A8] text-white rounded-lg shadow-sm"
          >
            Update
            <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
          </button>
      </form>
      <div className="mt-8 border-t-2 text-xs font-medium border-t-[#E5E5E5] relative w-full"><span className="absolute bg-[#eaeceeec] px-2 top-0 -translate-y-1/2 right-1/2 translate-x-1/2">OR</span></div>
      <button className="mt-8 flex items-center gap-x-2 text-sm font-medium text-[#EB001B]"><IoLogOutOutline size={24}/>Log out</button>
    </div>
  </div>
  );
}

export default Profile;
