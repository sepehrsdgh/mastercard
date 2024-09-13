import React from 'react';

function EllipsPurple() {
  return (
    <div className="relative">  
      <div
      style={{
        background: "rgb(55,27,72)",
        background:
          " radial-gradient(circle, rgba(55,27,72,1) 0%, rgba(55,27,72,0) 100%)",
      }}
      className="absolute right-[6%] top-[7vh] w-[75vw] h-[35vh]  rounded-full blur-[2rem]"></div>
    </div>
  );
}
function EllipseBlue() {
    return (
      <div className="relative">
        <div
        style={{
          background: "#221B48",
          background:
            " radial-gradient(circle, #221B48 0%, #221B4800 100%)",
        }}
         className="absolute left-[10%] top-[27vh] w-[60vw] h-[30vh] rounded-full blur-[3rem]"></div>
      </div>
    );
  }

export  {EllipsPurple, EllipseBlue};