import { AiOutlineInfoCircle } from "react-icons/ai"

function Dialog({closeModal,children}) {
  return (
    <div className="fixed top-0 backdrop-blur-[1px] z-10 bottom-0 left-0 right-0 p-5 bg-[#14131340] flex flex-col justify-center items-center">
        <div className="bg-white p-3 rounded-2xl shadow-md">
        <ConfirmationIcon />
        {children}
        <div className="mt-6 flex justify-between gap-6 items-center">
          <button className="text-sm rounded-xl w-full text-[#181616] py-3 border-2 border-[#D0D0D0]" onClick={closeModal}>Cancel</button>
          <button className="text-sm rounded-xl w-full text-white py-3 bg-[#26A17B]">Confirm</button>
        </div>
        </div>
        </div>
  )
}

export default Dialog

function ConfirmationIcon() {
    return (
      <div className="flex flex-col items-center text-[#26A17B]">
        {/* Circle with Gradient Border */}
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full"
             style={{
               background: 'linear-gradient(white, white) padding-box, linear-gradient(180deg, #26A17Bff, #26A17B4d, #26A17B00) border-box',
               border: '2px solid transparent',
               borderRadius: '9999px',
             }}
        ><span className="absolute top-0 bottom-0 left-0 right-0 bg-[#26A17B12] rounded-full"></span>
          <AiOutlineInfoCircle size={32} className="text-[#26A17B]" />
        </div>
        
        {/* Confirmation Text */}
        <p className="mt-4 text-lg font-bold">Confirmation</p>
      </div>
    )
  }