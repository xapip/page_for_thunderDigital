import React from "react";

import Links from "../Links";
import { linksPages } from "../../data/links";

export default function PageTitle() {
  const [activeLink, setActiveLink] = React.useState("Link One");

  return (
    <div className="flex items-center flex-col text-center py-[16px]">
      <h1 className="text-3xl font-semibold">Page Title</h1>
      <ul className="flex space-x-6 text-base text-[#3B3C4A]">
        <Links
          array={linksPages}
          onClick={(name) => setActiveLink(name)}
          activeLink={activeLink}
          withSlash={true}
        />
      </ul>
    </div>
  );
}
