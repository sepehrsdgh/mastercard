"use client"

import Link from "next/link";

// Its a button with a shiny white shadow beneath
function ShiningButton({href,buttonText}) {
  return (
    <Link
    href={href}
    className="relative w-full text-center py-3 bg-[#5848A8] text-white rounded-lg shadow-sm"
  >
    {buttonText}
    <span className="absolute left-[50%] translate-x-[-50%] bottom-0 translate-y-1/2 w-28 h-7 bg-[#cccbd365] rounded-full blur-[12px]"></span>
  </Link>
  );
}

export default ShiningButton;
