"use client";
import { useState } from "react";
import UpperHeader from "../common-componnets/upperHeader";
function Transfer() {
  const [totalMoney, setTotalMoney] = useState("");
  return (
    <>
      <UpperHeader pageName={"Transfer"} totalMoney={totalMoney} />
    </>
  );
}

export default Transfer;
