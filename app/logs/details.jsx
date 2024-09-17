import React from "react";

function Details({ closeModal }) {
  return (
    <div className="fixed top-0 backdrop-blur-[1px] z-10 bottom-0 left-0 right-0 p-5 bg-[#14131340] flex flex-col justify-center items-center">
      <div className="bg-white p-3 rounded-2xl shadow-md"></div>
    </div>
  );
}

export default Details;
