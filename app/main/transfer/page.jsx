"use client";
import { useState } from "react";
import UpperHeader from "../common-componnets/upperHeader";
import { useForm } from "react-hook-form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Dialog from "../common-componnets/dialog";
import { alertTypes, useAlert } from "@/context/alertContext";
import { axiosInstance } from "@/lib/axios";
import { API_ROUTES } from "@/utils/routes";
import { useUser } from "@/context/userContext";
import { transaction } from "@/utils/values";
const deductions = [0.2, 0.4, 0.6, 0.8];
function Transfer() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const { user } = useUser();

  const [showDialog, setShowDialog] = useState(false);
  const [pendingStatus, setPendingStatus] = useState(false); //to indicate submission process

  const { triggerAlert } = useAlert(); // to triger alert when sign up successfuly/failed

  const onSubmit = (data) => {
    setShowDialog(true);
  };

  const sendData = async () => {
    try {
      setShowDialog(false);
      setPendingStatus(true);
      // Set pending status to true to indicate submission process
      const response = await axiosInstance.post(API_ROUTES.saveTransaction, {
        destinationUserId: getValues("accountID"),
        amount: getValues("transferAmount"),
        currency: transaction.currency.usdt,
        type:2,
        description: getValues("description"),
      });

      if (response.status === 200) {
        triggerAlert({
          title: "Success!",
          message: "Transfer submitted",
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
            message:
              "An internal server error occurred. Please try again later.",
            type: alertTypes.error,
          });
        } else if (status === 409) {
          triggerAlert({
            title: "Insufficient funds",
            message: "Transfer amount is more than your account balance",
            type: alertTypes.error,
          });
        } else if (status === 400) {
          triggerAlert({
            title: "Invalid destination",
            message: "Seems given account ID is wrong",
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
    } finally {
      setPendingStatus(false);
    }
  };

  return (
    <div className="relative">
      <UpperHeader pageName={"Transfer"} totalMoney={user.total} />
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
                step=".01"
                className="w-full focus:outline-none"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setValue("transferAmount", user.total);
                }}
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
              {user.total !== "" &&
                user.total != 0 &&
                deductions.map((deduct, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      setValue(
                        "transferAmount",
                        parseFloat(user.total * deduct).toFixed(2)
                      );
                    }}
                    className="border-[1px] border-[#5848A8] rounded-lg px-2 py-2"
                  >
                    ${parseFloat(user.total * deduct).toFixed(2)}
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
                placeholder="Enter destination account ID"
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
            <div className="font-medium">free</div>
          </div>
          <button
            type="submit"
            className={`relative min-h-12 w-full mt-6 py-3 text-white rounded-lg shadow-sm flex items-center justify-center ${
              pendingStatus ? "bg-[#5848a8d0]" : "bg-[#5848A8]"
            }`}
          >
            {pendingStatus ? <div className="loader"></div> : "Transfer"}
            <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
          </button>
        </div>
      </form>
      {/* confirmation modal */}
      {showDialog && (
        <Dialog closeModal={() => setShowDialog(false)} action={sendData}>
          <div className="mt-6">
            <div className="flex text-sm justify-between items-center pb-3 border-b-2 border-b-[#E5E5E5] border-dashed">
              <div>Amount:</div>
              <div className="font-medium">{getValues("transferAmount")}</div>
            </div>
            <div className="flex text-sm justify-between items-center mt-2">
              <div>Destination Account ID:</div>
              <div className="font-medium">{getValues("accountID")}</div>
            </div>
            <div className="mt-8 bg-[#5848A80d] rounded-xl p-3 text-xs font-medium text-[#5848A8]">
              I confirm that I want to transfer the specified amount to the
              destination account ID.
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default Transfer;
