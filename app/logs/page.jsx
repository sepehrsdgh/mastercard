"use client";
import { useState } from "react";
import UpperHeader from "../main/common-componnets/upperHeader";
import { svgIcons } from "./svgs";
const statuses = {
  pending: <span className="text-xs font-medium text-[#F69608]">Pending</span>,
  successful: (
    <span className="text-xs font-medium text-[#26A17B]">Succesful</span>
  ),
  rejected: (
    <span className="text-xs font-medium text-[#EB001B]">Rejected</span>
  ),
};
const initialLogs = [
  {
    icon: svgIcons.deposit,
    action: "Deposit",
    date: "2024-05-11 / 13:56",
    amount: "100 USDT",
    status: statuses.pending,
  },
  {
    icon: svgIcons.transfer,
    action: "Transfer",
    date: "2024-05-11 / 13:56",
    amount: "100 USDT",
    status: statuses.successful,
  },
];

function LogList() {
  const [logs, setLogs] = useState(initialLogs);
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
        <div className="mt-8">
          {logs.map((log, i) => (
            <div key={i} className="mt-3 p-4 bg-white rounded-xl flex justify-between items-stretch">
              <div className="flex gap-x-3">
                {log.icon}
                <div className="flex flex-col gap-y-2">
                  <span className="text-sm font-medium">{log.action}</span>
                  <span className="text-xs text-[#00000099]">{log.date}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-y-2">
                <span className="text-sm font-medium">{log.amount}</span>
                {log.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogList;
