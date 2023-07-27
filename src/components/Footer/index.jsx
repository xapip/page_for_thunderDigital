import React from "react";

import Links from "../Links";
import Button from "../Button";
import Logo from "../Logo";
import { quickLink, category, linksPolicy } from "../../data/links";

export default function Footer() {
  return (
    <footer className="pt-[64px] bg-[#141624] border-t border-t-[#242535]">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <section>
            <h3 className="text-lg font-semibold mb-[12px]">About</h3>
            <p className="text-base text-[#97989F] max-w-[280px] mb-[24px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              vero eligendi maxime alias harum dolor, reiciendis, sunt esse illo
              quas repellendus libero saepe ab deleniti incidunt ad numquam
              optio! Eligendi!
            </p>
            <p>
              <span className="font-semibold">Email</span>&nbsp;:&nbsp;
              <a className="text-[#97989F]" href="mailto:info@jstemplate.net">
                info@jstemplate.net
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone</span>&nbsp;:&nbsp;
              <a className="text-[#97989F]" href="tel:+880 123 456 789">
                880 123 456 789
              </a>
            </p>
          </section>
          <section className="flex gap-[80px]">
            <div>
              <h3 className="text-lg font-semibold mb-[24px]">Quick Link</h3>
              <ul className="flex flex-col gap-[8px]">
                <Links array={quickLink} color={"#BABABF"} />
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-[24px]">Category</h3>
              <ul className="flex flex-col gap-[8px]">
                <Links array={category} color={"#BABABF"} />
              </ul>
            </div>
          </section>
          <section className="bg-[#242535] rounded-[12px] p-[32px] text-center">
            <h3 className="text-xl font-semibold mb-[8px]">
              Weekly Newsletter
            </h3>
            <p className=" text-[#97989F] mb-[30px]">
              Get blog articles and offers via email
            </p>
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="bg-[#181A2A] relative pr-[46px] rounded-[6px] mr-10 overflow-hidden border border-[#3B3C4A] w-full mb-[8px]">
                <input
                  type="email"
                  placeholder="search"
                  className="bg-inherit pl-4 py-3 w-full focus:outline-none"
                />
                <svg
                  className="absolute top-[16px] right-4"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.4375 4.375C2.91973 4.375 2.5 4.79473 2.5 5.3125V14.6875C2.5 15.2053 2.91973 15.625 3.4375 15.625H16.5625C17.0803 15.625 17.5 15.2053 17.5 14.6875V5.3125C17.5 4.79473 17.0803 4.375 16.5625 4.375H3.4375ZM1.25 5.3125C1.25 4.10438 2.22938 3.125 3.4375 3.125H16.5625C17.7706 3.125 18.75 4.10438 18.75 5.3125V14.6875C18.75 15.8956 17.7706 16.875 16.5625 16.875H3.4375C2.22938 16.875 1.25 15.8956 1.25 14.6875V5.3125Z"
                    fill="#696A75"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.88165 5.86629C4.09357 5.59382 4.48625 5.54474 4.75871 5.75665L10 9.83321L15.2413 5.75665C15.5138 5.54474 15.9064 5.59382 16.1183 5.86629C16.3303 6.13875 16.2812 6.53143 16.0087 6.74335L10.3837 11.1183C10.158 11.2939 9.84198 11.2939 9.61629 11.1183L3.99129 6.74335C3.71882 6.53143 3.66974 6.13875 3.88165 5.86629Z"
                    fill="#696A75"
                  />
                </svg>
              </div>
              <Button bg={"1"} padding={"lg"} widthFull={true}>
                <span className="text-base font-medium">Subscribe</span>
              </Button>
            </form>
          </section>
        </div>
        <div className="flex items-center justify-between mt-[64px] py-[32px] border-t border-t-[#242535]">
          <Logo inFooter={true} />
          <ul className="flex justify-end space-x-6 text-base">
            <Links array={linksPolicy} withSlash={true} color={"#BABABF"} />
          </ul>
        </div>
      </div>
    </footer>
  );
}
