"use client";
import { useState } from "react";
import UpperHeader from "../common-componnets/upperHeader";
import { IoCheckmarkDone, IoCopyOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";

function Deposite() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [totalMoney, setTotalMoney] = useState("");
  const [address, setAddress] = useState("XoUPdAabwwdL2yvt3ftQtw");
  const [copyClicked, setCopyClicked] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <UpperHeader pageName={"Deposit"} totalMoney={totalMoney} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 px-5 h-[calc(100vh-15rem)] pb-8 flex flex-col justify-between"
      >
        <div>
          {/* UID wallet Address */}
          <div>
            <div className="block text-sm font-medium">Address</div>
            <div
              className={`mt-2 w-full p-2 border flex items-center justify-between gap-x-2 bg-white border-gray-300 rounded-lg shadow-sm`}
            >
              <div className="overflow-hidden">{address}</div>
              <buton
                onClick={() => {
                  navigator.clipboard.writeText(address);
                  setCopyClicked(true);
                  setTimeout(() => {
                    setCopyClicked(false);
                  }, 1500);
                }}
                className={`flex items-center rounded-md justify-end gap-x-1 p-1 transition-all ease-in-out duration-300 font-semibold ${
                  copyClicked
                    ? "bg-[#adfcaa2c] text-emerald-700"
                    : "bg-[#5848A80d] text-[#5848A8]"
                }`}
              >
                {copyClicked ? (
                  <IoCheckmarkDone size={20} />
                ) : (
                  <IoCopyOutline size={20} />
                )}
                {copyClicked ? "Done" : "Copy"}
              </buton>
            </div>
          </div>
          {/* USDT amount to deposit */}
          <div className="mt-6">
            <div className="block text-sm font-medium">USDT Amount</div>
            <div
              className={`mt-2 flex items-center bg-white justify-between p-3 rounded-md
              border border-r-0 ${
                errors.usdtAmount ? "border-red-500" : "border-gray-300"
              }`}
            >
              <input
                id="usdtAmount"
                type="text"
                {...register("usdtAmount", {
                  required: "ESDT amount is required",
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
            {errors.usdtAmount && (
              <span className="text-red-500 text-sm">
                {errors.usdtAmount.message}
              </span>
            )}
          </div>
          {/* Transaction Link */}
          <div className="mt-6">
            <div className="block text-sm font-medium">Transaction Link</div>
            <div
              className={`mt-2 flex items-center bg-white justify-between p-3 rounded-md
              border border-r-0 ${
                errors.usdtAmount ? "border-red-500" : "border-gray-300"
              }`}
            >
              <input
                id="transactionLink"
                type="text"
                className="w-full focus:outline-none"
                placeholder="transaction or ..."
                {...register("transactionLink", {
                  required: "Transaction link is required",
                })}
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
            {errors.transactionLink && (
              <span className="text-red-500 text-sm">
                {errors.transactionLink.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="flex text-sm justify-between items-center pb-3 border-b-2 border-b-[#E5E5E5]">
            <div>Currency type:</div>
            <div className="text-[#ff0000] font-medium">
              Tether on the TRC20 network.
            </div>
          </div>
          <div className="flex text-sm justify-between items-center mt-2">
            <div>Deposit fee :</div>
            <div className="text-[#ff0000] font-medium">3%</div>
          </div>
          <button
            type="submit"
            className="relative w-full mt-4 py-3 bg-[#5848A8] text-white rounded-lg shadow-sm"
          >
            Submit
            <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
          </button>
        </div>
      </form>
    </>
  );
}

export default Deposite;
