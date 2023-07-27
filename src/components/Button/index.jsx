import React from "react";

const paddings = {
  sm: "px-[10px] py-[4px]",
  lg: "px-[20px] py-[12px]",
};
const saturate = {
  ".05": "hover:saturate-50 active:saturate-100",
  1: "hover:saturate-200 active:saturate-100",
};

export default function Button({ children, bg, padding, widthFull }) {
  return (
    <button
      className={`inline-block bg-[#4B6BFB]/[${bg}] rounded-[6px] ${
        padding === "sm" ? paddings.sm : paddings.lg
      } text-sm ${bg === ".05" ? saturate[".05"] : saturate["1"]} ${
        widthFull ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}
