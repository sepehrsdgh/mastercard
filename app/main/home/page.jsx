import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { BiBell } from "react-icons/bi";
import { Deposit, Mastercard, Transfer, WavingHandSVG } from "./svgs";
import { VscKey } from "react-icons/vsc";
function Home() {
  return (
    <>
      <div className="bg-[#070619] px-5 pt-3 pb-28 text-white relative">
        <BGPattern />
        <div className="z-10">
          <div className="flex justify-between items-stretch">
            <div className="flex gap-x-2">
              <FaCircleUser size={36} />
              <div>
                <div className="text-xs text-[#ffffffd2] flex">
                  Hello, Milad <WavingHandSVG />
                </div>
                <div className="text-[#FBFBFB] text-sm">
                  Welcome to{" "}
                  <span className="text-white text-base font-bold">wllt</span>
                </div>
              </div>
            </div>
            <div className="bg-[#ffffff1e] p-2 rounded-full">
              <BiBell size={25} />
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="text-[#ffffffa8] text-base font-medium">
              My Everything
            </div>
            <div className="mt-1 text-3xl font-medium">≈ $390.38</div>
          </div>
          <div className="w-full mt-6 text-xs font-normal bg-gradient-to-tr from-[#ffffff1a] to-[#9999991a] py-2 px-4 rounded-lg flex justify-between items-stretch">
            <div className="flex flex-col items-center gap-y-2 ">
              <Deposit />
              <div>Deposit</div>
            </div>
            <div className="h-10 w-[1px] bg-gradient-to-b from-[#ffffff00] via-white to-[#ffffff00]"></div>
            <div className="flex flex-col items-center gap-y-2 ">
              <Transfer />
              <div>Transfer</div>
            </div>
            <div className="h-10 w-[1px] bg-gradient-to-b from-[#ffffff00] via-white to-[#ffffff00]"></div>
            <div className="flex flex-col items-center gap-y-2 ">
              <VscKey size={22} />
              <div>3D PASS</div>
            </div>
          </div>
        </div>
        <div className="absolute top-full -translate-y-[40%] right-0 left-0 w-full ">
          <Mastercard />
        </div>
      </div>
    </>
  );
}

export default Home;

function BGPattern() {
  return (
    <div className="absolute flex justify-between right-5 left-5 top-0 z-0">
      <div
        className="w-[38px] h-[215.35px]"
        style={{
          background:
            "linear-gradient(179.98deg, rgba(54, 44, 107, 0) 9.39%, rgba(54, 44, 107, 0.22) 49.45%, rgba(54, 44, 107, 0) 89.5%)",
          transform: "matrix(1, -0.06, 0.39, 0.92, 0, 0)",
        }}
      ></div>{" "}
      <div
        className="w-[38px] h-[215.35px]"
        style={{
          background:
            "linear-gradient(179.98deg, rgba(54, 44, 107, 0) 9.39%, rgba(54, 44, 107, 0.22) 49.45%, rgba(54, 44, 107, 0) 89.5%)",
          transform: "matrix(1, -0.06, 0.39, 0.92, 0, 0)",
        }}
      ></div>{" "}
      <div
        className="w-[38px] h-[215.35px]"
        style={{
          background:
            "linear-gradient(179.98deg, rgba(54, 44, 107, 0) 9.39%, rgba(54, 44, 107, 0.22) 49.45%, rgba(54, 44, 107, 0) 89.5%)",
          transform: "matrix(1, -0.06, 0.39, 0.92, 0, 0)",
        }}
      ></div>{" "}
      <div
        className="w-[38px] h-[215.35px]"
        style={{
          background:
            "linear-gradient(179.98deg, rgba(54, 44, 107, 0) 9.39%, rgba(54, 44, 107, 0.22) 49.45%, rgba(54, 44, 107, 0) 89.5%)",
          transform: "matrix(1, -0.06, 0.39, 0.92, 0, 0)",
        }}
      ></div>{" "}
      <div
        className="w-[38px] h-[215.35px]"
        style={{
          background:
            "linear-gradient(179.98deg, rgba(54, 44, 107, 0) 9.39%, rgba(54, 44, 107, 0.22) 49.45%, rgba(54, 44, 107, 0) 89.5%)",
          transform: "matrix(1, -0.06, 0.39, 0.92, 0, 0)",
        }}
      ></div>{" "}
      <div
        className="w-[38px] h-[215.35px]"
        style={{
          background:
            "linear-gradient(179.98deg, rgba(54, 44, 107, 0) 9.39%, rgba(54, 44, 107, 0.22) 49.45%, rgba(54, 44, 107, 0) 89.5%)",
          transform: "matrix(1, -0.06, 0.39, 0.92, 0, 0)",
        }}
      ></div>
    </div>
  );
}
