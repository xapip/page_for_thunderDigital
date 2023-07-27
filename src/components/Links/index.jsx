import React from "react";

export default function Links({
  array,
  color,
  withSlash,
  onClick,
  activeLink,
}) {
  return (
    <>
      {array.map((link) => (
        <li
          className={
            !!withSlash
              ? `${
                  link.name === activeLink ? "text-[#696A75]" : "text-[#3B3C4A]"
                } relative hover:text-[#696A75] before:content-[''] first-of-type:before:content-[] before:w-[1px] before:h-[16px] before:top-[4px] before:left-[-12px] before:absolute hover:before:bg-[#E8E8EA] ${
                  link.name === activeLink
                    ? "before:bg-[#E8E8EA]"
                    : "before:bg-[#3B3C4A]"
                } transition-all`
              : `${
                  !!color ? `text-[${color}]` : ""
                } hover:text-[#4B6BFB] transition-all duration-200`
          }
          key={link.name}
          onClick={!!onClick ? () => onClick(link.name) : null}
        >
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </>
  );
}
