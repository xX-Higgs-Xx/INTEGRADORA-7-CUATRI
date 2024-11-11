import React from "react";

const Button = ({ text, styleType }) => {
  const buttonStyles =
    styleType === "primary"
      ? "bg-rojosecundario text-white"
      : "bg-white text-black";

  return (
    <button className="${buttonStyles} relative flex items-center justify-center px-2 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 rounded-full group">
      <span className="absolute flex items-center justify-center w-full h-full duration-300 -translate-x-full ">
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
      {text}
    </button>
    // <button className={`px-2 py-2 rounded-full ${buttonStyles} shadow-inner hover:shadow-lg hover:opacity-70`}>
    //   {text}
    // </button>
  );
};

export default Button;
