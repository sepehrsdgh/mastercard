import { EllipseBlue, EllipsPurple } from "@/components/landing/Ellipeses";
import {
  MasterCardLighSVG,
  MasterCardDarkSVG,
} from "@/components/landing/masterCardsSVG";
import { Plus_Jakarta_Sans } from "next/font/google";
import ShiningButton from "@/components/landing/shiningButton";

// If loading a variable font, you don't need to specify the font weight
const plus = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function Home() {
  
  return (
    <main className="max-h-screen bg-[#0A0A0A] relative">
      {/* ellipese usage => just for graphic design */}
      <EllipsPurple />
      <EllipseBlue />
      {/* ellipese usage => just for graphic design */}
      <div className="h-screen grid grid-rows-2">
        {/* grid row1 */}
        <div className="relative ">
          <div className="absolute bottom-0">
            <MasterCardLighSVG />
          </div>
          <div className="absolute bottom-0">
            <MasterCardDarkSVG />
          </div>
        </div>
        {/* grid row 2 */}
      <div className={plus.className}>
        <div className="text-[2.2em] text-white absolute top-[63vh] px-[12vw]">
          Mastercard Linked to the Crypto Network!
        </div>
      </div>
      </div>
      <div className="absolute no-scrollbar overflow-y-hidden  bottom-5 left-0 right-0 flex justify-center items-center w-full">
        <ShiningButton buttonText={"Let's go!"} />
      </div>
    </main>
  );
}
