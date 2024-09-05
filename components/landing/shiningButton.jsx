"use client"
// Its a button with a shiny white shadow beneath
function ShiningButton({buttonText}) {
  return (
    <div className="relative w-[85vw] h-12">
      {/* Banner background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#5848A8] to-[#5848A8]">
      </div>
      
      {/* Ellipse with blur effect */}
      <div className="absolute left-[50%] translate-x-[-50%] bottom-[-2px] w-28 h-7 bg-[#7D71B4] rounded-full blur-[12px]"></div>
      
      {/* Text overlay */}
      <button className="absolute inset-0 flex items-center justify-center text-white text-sm">
        <div>
          <p className="inline-block mr- text-base">{buttonText}</p>
          {/* Add the styled individual text elements here as needed */}
        </div>
      </button>
      <div className='absolute  mt-12 w-screen bg-black h-full'></div>

    </div>
  );
}

export default ShiningButton;
