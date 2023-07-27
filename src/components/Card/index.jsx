import React from "react";

import Button from "../Button";

export default function Card({ size }) {
  return (
    <div
      className={`relative flex h-auto rounded-[12px] overflow-hidden ${
        size === "lg"
          ? "w-full"
          : "max-w-[392px] border-[1px] border-[#242535] p-[16px] flex-col gap-[16px]"
      }`}
    >
      <img
        className={`w-full h-auto bg-[#141624] ${
          size === "sm" ? "rounded-[6px]" : ""
        }`}
        src="./image\m-post-card-overlay.jpg"
        alt="cardImg"
      />
      <div
        className={
          size === "lg" ? "absolute z-100 left-[40px] bottom-[40px]" : "p-[8px]"
        }
      >
        <Button bg={size === "sm" ? ".05" : "1"} padding={"sm"}>
          Technology
        </Button>
        <p
          className={
            size === "lg"
              ? "text-4xl font-semibold mt-4 mb-6 max-w-[720px]"
              : "text-xl font-semibold mt-4 mb-5 w-full"
          }
        >
          <a className="hover:underline" href="#">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </a>
        </p>
        <div className="flex items-center">
          <img
            className="rounded-full mr-3"
            src="./image/avatar.jpg"
            alt="avatar"
          />
          <p className="font-medium mr-5">Tracey Wilson</p>
          <time className="font-normal" dateTime="2022-08-20">
            August 20, 2022
          </time>
        </div>
      </div>
    </div>
  );
}
