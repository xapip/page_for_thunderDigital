import React from "react";

import Header from "./components/Header";
import PageTitle from "./components/PageTitle";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  return (
    <div className="min-h-screen h-full bg-[#181a2a] text-white font-body not-italic font-normal">
      <Header />
      <main className="container mx-auto mt-[24px]">
        <PageTitle />
        <div className="my-[48px]">
          <Card size={"lg"} />
        </div>
        <section>
          <h2 className="text-2xl font-bold">Latest Post</h2>
          <div className="flex flex-wrap justify-center xl:justify-between gap-5 my-[32px]">
            <Card size={"sm"} />
            <Card size={"sm"} />
            <Card size={"sm"} />
            <Card size={"sm"} />
          </div>
          <div className="flex justify-center font-medium  mx-auto h-auto">
            <a
              className=" py-3 px-5 rounded-[6px] border-[1px] border-[#696A75]/[.3] hover:border-[#696A75] transition-all"
              href="#"
            >
              View All Post
            </a>
          </div>
        </section>
        <div>
          <a
            className="flex items-center flex-col justify-center rounded-[12px] bg-[#242535] w-[750px] h-[100px] mx-auto my-20 border-[1px] border-[#242535] hover:border-[#4B6BFB] transition-all duration-300 hover:text-[#ffffff]"
            href="#"
          >
            <span className="text-sm text-[#696A75]">Advertisement</span>
            <span className="text-xl font-semibold text-[#696A75]">
              You can place ads
            </span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
