import React from "react";

export default function Button({ children }) {
  return (
    <button
      className={`inline-block bg-[#4B6BFB] rounded-[6px] w-full px-[20px] py-[12px]`}
    >
      {children}
    </button>
  );
}
