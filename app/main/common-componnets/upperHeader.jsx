import { BiTransferAlt } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";

function UpperHeader({ pageName, totalMoney }) {
  return (
    <div className="bg-[#070619] px-5 py-3 text-white relative">
      <div className="flex justify-between items-center">
        <IoArrowBackOutline size={25} />
        <div className="text-base font-medium">{pageName}</div>
        <div className="bg-[#ffffff1e] p-2 rounded-full">
          <BiTransferAlt size={25} />
        </div>
      </div>
      {totalMoney!=undefined&& <div className="mt-8 text-center">
          <div className="text-[#ffffffa8] text-base font-medium">
            My Everything
          </div>
          <div className="mt-1 text-3xl font-medium">≈ ${totalMoney}</div>
        </div>}
    </div>
  );
}

export default UpperHeader;
