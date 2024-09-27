import { transaction } from "@/utils/values";
import { svgIcons } from "./svgs";

function Details({ closeModal, log}) {
  const { id, amount, currency, date, type, status } = log;
  return (
    <div className="fixed top-0 backdrop-blur-[1px] z-10 bottom-0 left-0 right-0 p-5 bg-[#14131340] flex flex-col justify-center items-center">
      <div className="bg-white py-6 px-8 rounded-2xl shadow-md">
        <TypeIcon type={type} />
        {/* details */}
        <div className="mt-6">
            <div className="flex text-sm justify-between items-center pb-3 border-b-2 border-b-[#E5E5E5] border-dashed">
              <div>ID:</div>
              <div className="font-medium">{id}</div>
            </div>
            <div className="flex text-sm justify-between items-center mt-2 pb-3 border-b-2 border-b-[#E5E5E5] border-dashed">
              <div>Recipient::</div>
              <div className="font-medium">TRC20</div>
            </div>
            <div className="flex text-sm justify-between items-center mt-2 pb-3 border-b-2 border-b-[#E5E5E5] border-dashed">
              <div>Status:</div>
              <div className="font-medium">{status}</div>
            </div>
            <div className="flex text-sm justify-between items-center mt-2 pb-3 border-b-2 border-b-[#E5E5E5] border-dashed">
              <div>Amount:</div>
              <div className="font-medium">{amount}</div>
            </div>
            <div className="flex text-sm justify-between items-center mt-2 pb-3 border-b-2 border-b-[#E5E5E5] border-dashed">
              <div>Currency:</div>
              <div className="font-medium">{currency}</div>
            </div>
            <div className="flex text-sm justify-between items-center mt-2 pb-3">
              <div>Date:</div>
              <div className="font-medium">{date}</div>
            </div>
          </div>
          {/* buttons */}
        <div className="mt-6 flex justify-between gap-6 items-center">
          <button
            className="text-sm rounded-xl w-full text-[#181616] py-3 border-2 border-[#D0D0D0]"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="text-sm rounded-xl w-full text-white py-3 bg-[#5848A8]"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;

function TypeIcon({ type }) {
  return (
    <div
      className={`flex flex-col items-center ${
        type == transaction.type.deposit && "text-[#26A17B]"
      }
      ${type == transaction.type.transfer && "text-[#177EF8]"}`}
    >
      {/* Circle with Gradient Border */}
      <div
        className="relative flex items-center justify-center w-20 h-20 rounded-full"
        style={{
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(180deg, #26A17Bff, #26A17B4d, #26A17B00) border-box",
          border: "2px solid transparent",
          borderRadius: "9999px",
        }}
      >
        <span
          className={`absolute top-0 bottom-0 left-0 right-0 rounded-full
 `}
        ></span>
        <div className="scale-[1.7]">
        {svgIcons[type]}
        </div>
      </div>

      {/* Confirmation Text */}
      <p className="mt-4 text-lg font-bold">Details</p>
    </div>
  );
}
