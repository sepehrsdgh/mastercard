import React from "react";

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="hidden" // Hiding the default checkbox
          checked={checked}
          onChange={onChange}
        />
        <span
          className={`w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-md ${
            checked ? "bg-[#5848A8] border-[#5848A8]" : "bg-white"
          } transition-colors duration-300 ease-in-out`}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </span>
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
