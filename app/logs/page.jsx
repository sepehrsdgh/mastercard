"use client";
import { useState } from "react";
import UpperHeader from "../main/common-componnets/upperHeader";
import { svgIcons } from "./svgs";
import { useLogList } from "@/context/logContext";
import Loader from "../common_components/loader";
import { transaction } from "@/utils/values";
import Details from "./details";
const statuses = {
  PENDING: <span className="text-xs font-medium text-[#F69608]">Pending</span>,
  SUCCESSFUL: (
    <span className="text-xs font-medium text-[#26A17B]">Succesful</span>
  ),
  REJECTED: (
    <span className="text-xs font-medium text-[#EB001B]">Rejected</span>
  ),
};

function LogList() {
  const { loading } = useLogList();
  const modes = {
    walletLogs: "Wallet Logs",
    cardTransactions: "Card Transactions",
  };
  const [mode, setMode] = useState(modes.walletLogs);
  const toggleMode = () => {
    setMode((current) =>
      current === modes.walletLogs ? modes.cardTransactions : modes.walletLogs
    );
  };
  return (
    <>
      {loading && <Loader />}
      <div className="bg-[#F6F8FA] min-h-screen">
        <UpperHeader pageName={"Log list"} />
        <div className="p-5">
          {/* switch logs */}
          <div className="relative grid grid-cols-2 text-center bg-[#EFEFEF] rounded-xl p-0.5 text-sm font-medium">
            <button
              onClick={toggleMode}
              className="rounded-lg py-3 transition-colors z-10"
            >
              Wallet Logs
            </button>
            <button
              onClick={toggleMode}
              className="rounded-lg py-3 transition-colors z-10"
            >
              Card Transactions
            </button>
            <div
              className={`absolute rounded-lg top-1 bottom-1 left-1 w-[calc(50%-0.25rem)]  bg-white transition-transform duration-500 ease-in-out ${
                mode === modes.cardTransactions
                  ? "translate-x-full"
                  : "translate-x-0"
              }`}
            ></div>{" "}
          </div>
          <div className="w-full  no-scrollbar overflow-x-hidden relative">
            <div
              className={`grid grid-cols-2 w-[200%] transition-transform duration-500 ease-in-out ${
                mode === modes.cardTransactions && "transform -translate-x-1/2"
              }`}
            >
              <WalletLogs />
              <CardLogs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogList;

const WalletLogs = () => {
  const { walletLogs } = useLogList();
  const [showDetails, setShowDetails] = useState(false);
  const [focusedLog, setFocusedLog] = useState({});

  return (
    <div className="mt-8">
      {walletLogs.map((log, i) => (
        <div
          key={i}
          onClick={() => {
            setShowDetails(true);
            setFocusedLog(log);
          }}
          className="mt-3 p-4 bg-white rounded-xl flex justify-between items-stretch"
        >
          <div className="flex gap-x-3">
            {svgIcons[log.type]}
            <div className="flex flex-col gap-y-2">
              <span className="text-sm font-medium">
                {log.type.charAt(0)+log.type.slice(1).toLowerCase()}
              </span>
              <span className="text-xs text-[#00000099]">{log.date}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-y-2">
            <span className="text-sm font-medium">{log.amount} USDT</span>
            {statuses[log.status]}
          </div>
        </div>
      ))}
      {showDetails && (
        <Details closeModal={() => setShowDetails(false)} log={focusedLog} />
      )}
    </div>
  );
};

const CardLogs = () => {
  return <div className="mt-8">waiting for documents</div>;
};
