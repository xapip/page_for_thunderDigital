import React from "react";

import Links from "../Links";
import Logo from "../Logo";
import { navBar } from "../../data/links";

export default function Header() {
  const [darkTheme, setDarkTheme] = React.useState(true);

  return (
    <div className="container mx-auto px-[5px] flex justify-between items-center py-8">
      {/* logo */}
      <Logo inFooter={false} />

      <div className="flex justify-between">
        {/* navBar */}
        <ul className="flex items-center space-x-10 text-base px-28 mr-5">
          <Links array={navBar} />
        </ul>

        {/* search */}
        <div className="relative pr-5 bg-[#242535] rounded w-40 mr-10 overflow-hidden">
          <input
            type="text"
            placeholder="search"
            className="bg-inherit placeholder:font-inter pl-4 py-2 w-full focus:outline-none"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="absolute right-2 top-[30%] "
            >
              <path
                d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                stroke="#52525B"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M10.5718 10.5718L14.0002 14.0002"
                stroke="#52525B"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* btn theme */}
        <label className="inline-flex self-center items-center cursor-pointer h-full">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={darkTheme}
            onChange={(e) => setDarkTheme(e.target.checked)}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:bg-[url(./image/sunny.svg)] after:bg-center after:bg-no-repeat after:shadow-sm peer-checked:after:shadow-none peer-checked:bg-[#4B6BFB]"></div>
        </label>
      </div>
    </div>
  );
}
