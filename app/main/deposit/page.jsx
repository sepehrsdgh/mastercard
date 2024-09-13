"use client";
import { useState } from "react";
import UpperHeader from "../common-componnets/upperHeader";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Deposite() {
  const [totalMoney, setTotalMoney] = useState("");
  return (
    <>
      <UpperHeader pageName={"Deposit"} totalMoney={totalMoney} />

      <div className="mt-6 px-5">
        {/* UID wallet Address */}
        <div>
          <div className="block text-sm font-medium">Address</div>
          <div
            className={`mt-2 w-full p-2 border flex items-center justify-between gap-x-2 bg-white border-gray-300 rounded-lg shadow-sm`}
          >
            <div className="overflow-hidden">XoUPdAabwwdL2yvt3ftQtw...</div>
            <buton className="flex items-center justify-end gap-x-1 bg-[#5848A80d] p-1 text-[#5848A8] font-semibold">
              <IoCopyOutline size={20} />
              Copy
            </buton>
          </div>
        </div>
        {/* USDT amount to deposit */}
        <div className="mt-6">
          <div className="block text-sm font-medium">USDT Amount</div>
          <div className="mt-2 flex items-center bg-white justify-between border p-3  border-gray-300 border-r-0 rounded-md">
            <input
              id="usdtAmount"
              type="text"
              className="w-full focus:outline-none group-focus:ring-2 group-focus:ring-purple-500"
              placeholder="Enter amount"
            />
            <button className="group relative">
            <AiOutlineInfoCircle
              className="text-gray-400"
              size={20}
              // onClick={() => setShowTooltip(!showTooltip)}
              />
             {/* Tooltip for USDT Amount - appears on focus */}
        <div className="absolute right-0 top-full mt-1 bg-gradient-to-br from-[#110C2D] to-[#2F275E] text-white text-xs p-3 rounded-lg shadow-lg hidden group-focus-within:block">
          <div className="flex items-center space-x-2">
            <span className="bg-purple-500 h-2 w-2 rounded-full whitespace-nowrap overflow-visible"></span>
            <p>The transfer network must be TRC20.</p>
          </div>
          <div className="flex items-center space-x-2 mt-1 whitespace-nowrap overflow-visible">
            <span className="bg-purple-500 h-2 w-2 rounded-full"></span>
            <p>The amount cannot be less than 50 USDT.</p>
          </div>
        </div>
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deposite;
