"use client";
import { useState } from "react";
import UpperHeader from "../common-componnets/upperHeader";
import { IoCheckmarkDone, IoCopyOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Dialog from "../common-componnets/dialog";
import { useUser } from "@/context/userContext";
import { axiosInstance } from "@/lib/axios";
import { API_ROUTES } from "@/utils/routes";
import { alertTypes, useAlert } from "@/context/alertContext";
import { transaction } from "@/utils/values";

function Deposite() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { user } = useUser();

  const [copyClicked, setCopyClicked] = useState(false);
  const [showDialog,setShowDialog] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(false);//to indicate submission process

  const { triggerAlert } = useAlert(); // to triger alert when sign up successfuly/failed

  const onSubmit = (data) => {
    setShowDialog(true)
  };

const sendData = async () =>{
  try {
    setShowDialog(false);
    setPendingStatus(true);
    // Set pending status to true to indicate submission process
    const response = await axiosInstance.post(API_ROUTES.saveTransaction, {
      destinationUserId:user.uid,
      amount:getValues("usdtAmount"),
      currency:transaction.currency.usdt,
      type:1,
      description:"",
      link:getValues("transactionLink"), 
    });

    if (response.status === 200) {
      triggerAlert({
        title: "Success!",
        message: "Deposit submitted",
        type: alertTypes.success,
      });
    }
  } catch (error) {
    // Reset pending status in case of an error
    console.error(error);
    // Check error response and handle specific status codes
    if (error.response) {
      const { status } = error.response;
 if (status === 500) {
        triggerAlert({
          title: "Server Error",
          message: "An internal server error occurred. Please try again later.",
          type: alertTypes.error,
        });
      } else {
        // Generic error message for other statuses
        triggerAlert({
          title: "Operation Failed",
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
  }finally{
    setPendingStatus(false);
  }
};
  return (
    <div className="relative">
      <UpperHeader pageName={"Deposit"} totalMoney={user.total} />
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
              <div className="overflow-scroll whitespace-nowrap">{user.uid}</div>
              <buton
                onClick={() => {
                  navigator.clipboard.writeText(user.uid);
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
                type="number"
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
            className={`relative min-h-12 w-full mt-6 py-3 text-white rounded-lg shadow-sm flex items-center justify-center ${pendingStatus?"bg-[#5848a8d0]":"bg-[#5848A8]"}`}
            >
              {pendingStatus ? <div className="loader"></div> : "Submit"}
            <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
          </button>
        </div>
      </form>
      {showDialog && (
        <Dialog closeModal={() => setShowDialog(false)} action={sendData}>
          <div className="mt-6">
            <div className="flex text-sm justify-between items-center pb-3 border-b-2 border-b-[#E5E5E5] border-dashed">
              <div>Amount:</div>
              <div className="font-medium">{getValues("usdtAmount")}</div>
            </div>
            <div className="flex text-sm justify-between items-center mt-2 pb-3 border-b-2 border-b-[#E5E5E5] border-dashed">
              <div>Declared Network:</div>
              <div className="font-medium">TRC20</div>
            </div>
            <div className="flex text-sm justify-between items-center mt-2">
              <div>Network Fee:</div>
              <div className="font-medium">3%</div>
            </div>
            <div className="mt-8 bg-[#5848A80d] rounded-xl p-3 text-xs font-medium text-[#5848A8]">
            Note: Please be aware that if the network is incorrectly selected or the destination address is incorrect, there is a risk of losing the funds, and the responsibility will be yours.
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default Deposite;
