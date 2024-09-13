import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { BiBell } from "react-icons/bi";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { Deposit, Mastercard, Transfer, WavingHandSVG } from "./svgs";
import { VscKey } from "react-icons/vsc";
const accounts = [
  {
    icon: (
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 37.7812C29.5965 37.7812 37.7812 29.5965 37.7812 19.5C37.7812 9.40354 29.5965 1.21875 19.5 1.21875C9.40354 1.21875 1.21875 9.40354 1.21875 19.5C1.21875 29.5965 9.40354 37.7812 19.5 37.7812Z"
          fill="#E30917"
        />
        <path
          d="M25.1672 23.7656L25.2281 20.475L21.9375 19.5L25.2281 18.525L25.1672 15.2344L27.1781 17.8547L30.4688 16.8797L28.4578 19.5L30.4688 22.1203L27.1781 21.1453L25.1672 23.7656Z"
          fill="white"
        />
        <path
          d="M20.2313 26.8125C16.2094 26.8125 12.9797 23.5219 12.9797 19.5C12.9797 15.4781 16.2094 12.1875 20.2313 12.1875C21.7547 12.1875 23.1562 12.675 24.375 13.4672C22.7297 11.5781 20.2922 10.3594 17.55 10.3594C12.5531 10.3594 8.53125 14.4422 8.53125 19.5C8.53125 24.5578 12.5531 28.6406 17.55 28.6406C20.2922 28.6406 22.7297 27.4219 24.375 25.5328C23.2172 26.325 21.8156 26.8125 20.2313 26.8125Z"
          fill="white"
        />
      </svg>
    ),
    title: "Turkish Lira",
    currency: "Lira",
    currencySymbol: "₺",
    amount: "417,27",
  },
  {
    icon: (
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_129_686)">
          <path
            d="M19.5 39C30.2696 39 39 30.2696 39 19.5C39 8.73045 30.2696 0 19.5 0C8.73045 0 0 8.73045 0 19.5C0 30.2696 8.73045 39 19.5 39Z"
            fill="#26A17B"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.8425 21.1855V21.1831C21.7085 21.1929 21.0174 21.2343 19.4757 21.2343C18.2448 21.2343 17.3783 21.1977 17.0736 21.1831V21.1868C12.3351 20.9784 8.79825 20.1533 8.79825 19.1661C8.79825 18.1789 12.3351 17.355 17.0736 17.143V20.3653C17.3831 20.3873 18.2704 20.4397 19.4964 20.4397C20.9675 20.4397 21.7048 20.3787 21.8425 20.3665V17.1454C26.5713 17.3562 30.0996 18.1813 30.0996 19.1661C30.0996 20.1533 26.5713 20.9759 21.8425 21.1855ZM21.8425 16.8102V13.9267H28.4408V9.52942H10.4753V13.9267H17.0736V16.809C11.7111 17.0552 7.67822 18.1179 7.67822 19.3903C7.67822 20.6627 11.7111 21.7242 17.0736 21.9716V31.2122H21.8425V21.9692C27.1965 21.723 31.2196 20.6615 31.2196 19.3903C31.2196 18.1192 27.1965 17.0576 21.8425 16.8102Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_129_686">
            <rect width="39" height="39" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Turkish Lira",
    currency: "Lira",
    currencySymbol: "₺",
    amount: "417,27",
  },
];
function Home() {
  const tetherRate = 0.029
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
        <div className="absolute top-full -translate-y-[40%] flex justify-center items-center right-0 left-0 w-full ">
          <Mastercard />
        </div>
      </div>
      {/* body */}
      <div className="mt-32 pb-32 px-5">
        <div className="bg-[#FF808026] text-[#F2354A] rounded-md py-2 flex items-center justify-center gap-x-2">
          <LiaInfoCircleSolid size={16} />
          <div className="text-xs font-medium">
            Activation of the card with the first deposit.
          </div>
        </div>

        <div className="mt-6">
          <h6 className="font-bold text-lg">My wallet</h6>
          {accounts.map((account, i) => (
            <div key={i} className={`flex items-center py-3 ${i==0&&"border-b-2 border-b-[#E5E5E5]"} justify-between`}>
              <div className="flex items-center gap-x-2">
                {account.icon}
                <div className="flex flex-col gap-y-1">
                  <div className="text-sm font-semibold">{account.title}</div>
                  <div className="text-xs font-normal text-[#808080]">{account.currency}</div>
                </div>
              </div>
              <div className="flex flex-col gap-y-1 items-end">
                <div className="text-sm font-semibold">{account.currencySymbol}{" "}{account.amount}</div>
                <div className="text-xs font-normal text-[#808080]">≈ ${parseFloat(parseFloat(account.amount)*tetherRate).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

function BGPattern() {
  return (
    <div className="absolute flex justify-between right-0 left-0 px-5 top-0 z-0 overflow-clip">
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
