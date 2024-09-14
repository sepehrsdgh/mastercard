"use client";
import { useState } from "react";
import UpperHeader from "../common-componnets/upperHeader";
import { useForm } from "react-hook-form";
import { AiOutlineInfoCircle } from "react-icons/ai";
const deductions = [0.2, 0.4, 0.6, 0.8];
function Transfer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [totalMoney, setTotalMoney] = useState(390.38);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <UpperHeader pageName={"Transfer"} totalMoney={totalMoney} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 px-5 h-[calc(100vh-15rem)] pb-8 flex flex-col justify-between"
      >
        <div>
          {/* UID wallet Address */}
          <div>
            <div className="block text-sm font-medium">Transfer amount</div>
            <div
              className={`mt-2 w-full p-2 border flex items-center justify-between gap-x-2 bg-white  rounded-lg shadow-sm ${
                errors.transferAmount ? "border-red-500" : "border-gray-300"
              }`}
            >
              <input
                {...register("transferAmount", {
                  required: "Transfer amount is required",
                })}
                type="number"
                className="w-full focus:outline-none"
              />
              <button
                onClick={() => {}}
                className={`flex items-center justify-end gap-x-1 px-3 transition-all ease-in-out duration-300 font-semibold  border-l-2 border-l-[#E1E1E1] text-[#5848A8]
                `}
              >
                MAX
              </button>
            </div>
            {errors.transferAmount && (
              <span className="text-red-500 text-sm">
                {errors.transferAmount.message}
              </span>
            )}
            <div className="flex justify-between mt-4 items-center text-[#5848A8] font-medium text-sm w-full">
              {deductions.map((deduct, i) => (
                <button
                  key={i}
                  className="border-[1px] border-[#5848A8] rounded-lg px-2 py-2"
                >
                  ${parseFloat(totalMoney * deduct).toFixed(2)}
                </button>
              ))}
            </div>
          </div>
          {/* Account ID to transfer */}
          <div className="mt-6">
            <div className="block text-sm font-medium">Account ID</div>
            <div
              className={`mt-2 flex items-center bg-white justify-between p-3 rounded-md
              border border-r-0 ${
                errors.accountID ? "border-red-500" : "border-gray-300"
              }`}
            >
              <input
                id="accountID"
                type="text"
                {...register("accountID", {
                  required: "Account ID is required",
                })}
                className={`w-full focus:outline-none`}
                placeholder="Enter amount"
              />
              <button className="group relative">
                <AiOutlineInfoCircle className="text-gray-400" size={20} />
                {/* Tooltip for USDT Amount - appears on focus */}
                <div className="absolute -right-3 top-full mt-3 bg-gradient-to-br from-[#110C2D] to-[#2F275E] text-white text-xs p-3 rounded-lg shadow-lg hidden group-focus-within:block">
                  {/* a little triangle on top of the dialog */}
                  <div
                    className="absolute w-0 h-0 block top-0 -translate-y-full right-4"
                    style={{
                      content: "",
                      borderLeft: "5px solid transparent",
                      borderRight: " 5px solid transparent",
                      borderBottom: "5px solid #2e265c",
                    }}
                  ></div>
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
            {errors.accountID && (
              <span className="text-red-500 text-sm">
                {errors.accountID.message}
              </span>
            )}
          </div>
          {/* Transaction Link */}
          <div className="mt-6">
            <div className="block text-sm font-medium">Description</div>
            
              <input
                id="description"
                type="text"
                className="w-full focus:outline-none mt-2 flex items-center bg-white justify-between p-3 rounded-md
              border border-r-0 border-gray-300"
                {...register("description")}
              />
          
          </div>
        </div>
        <div>
          <div className="flex text-sm justify-between items-center">
            <div>Transfer fee:</div>
            <div className="font-medium">
              free
            </div>
          </div>
          <button
            type="submit"
            className="relative w-full mt-4 py-3 bg-[#5848A8] text-white rounded-lg shadow-sm"
          >
            Transfer
            <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
          </button>
        </div>
      </form>
    </>
  );
}

export default Transfer;
