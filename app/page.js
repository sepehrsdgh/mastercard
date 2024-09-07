import { EllipseBlue, EllipsPurple } from "@/components/landing/Ellipeses";
import {
  MasterCardLighSVG,
  MasterCardDarkSVG,
} from "@/components/landing/masterCardsSVG";
import { Plus_Jakarta_Sans } from "next/font/google";
import ShiningButton from "@/components/landing/shiningButton";

export default function Home() {
  return (
    <main className="h-[96vh] relative">
      {/* ellipese usage => just for graphic design */}
      <EllipsPurple />
      <EllipseBlue />
      {/* ellipese usage => just for graphic design */}
      <div className="h-[97vh] grid grid-rows-2">
        {/* grid row1 */}
        <div className="relative mb-3">
          <div className="absolute bottom-0">
            <MasterCardLighSVG />
          </div>
          <div className="absolute bottom-0">
            <MasterCardDarkSVG />
          </div>
        </div>
        {/* grid row 2 */}
        <div className="text-[2.2em] text-white absolute top-[56vh] px-[9vw]">
          Mastercard Linked to the Crypto Network!
        </div>
      </div>

      <div className="absolute no-scrollbar overflow-y-hidden  bottom-0 mb-20 left-0 right-0 flex justify-center items-center w-full">
        <ShiningButton buttonText={"Let's go!"} />
      </div>
    </main>
  );
}
