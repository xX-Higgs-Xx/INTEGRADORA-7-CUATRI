import React from "react";

const Button = ({ text, styleType }) => {
  const buttonStyles =
    styleType === "primary"
      ? "bg-rojosecundario text-white"
      : "bg-white text-black";

  return (
    <button className={`${buttonStyles} px-3 relative flex items-center justify-center py-2 overflow-hidden font-medium transition duration-300 ease-out rounded-full group active:opacity-70 shadow-inner shadow-black`}>
      <span className="absolute flex items-center justify-center w-full h-full duration-300 -translate-x-full  group-hover:translate-x-0 ease">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x-bind:width="size"
          x-bind:height="size"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          x-bind:stroke-width="stroke"
          stroke-linecap="round"
          stroke-linejoin="round"
          width="24"
          height="24"
          stroke-width="2"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </span>
      <span className="px-3 flex items-start justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">{text}</span>
    </button>
  );
};

export default Button;
