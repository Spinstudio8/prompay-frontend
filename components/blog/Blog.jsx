import React, { useState } from "react";
import English from "./English";
import Quantitative from "./Quantitative";
import Biology from "./Biology";
import Geography from "./Geography";
import CurrentAffairs from "./CurrentAffairs";

const activeStyle =
  "bg-primaryGreen text-white border-l-2 border-r-2 border-white px-2 py-1 cursor-pointer rounded-md";
const nonActiveStyle =
  "border-l-2 border-r-2 border-white px-2 py-1 cursor-pointer hover:text-black hover:rounded-md";

const Blog = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-11/12 md:w-[80%] mx-auto text-black text-[14px] xs:text-[16px]">
      <div className="w-full pt-[1.5rem] pb-8 xs:py-[2.5rem] md:py-[5rem]">
        <h1 className="text-[30px] md:text-[50px] font-bold">Prompay Blog</h1>
        <p className="mt-4 text-[16px]">Learn Before You Earn</p>
      </div>
      <h2 className="text-[16px] xs:text-[18px] text-primaryGreen font-semibold mb-2">
        One step at a time
      </h2>
      <div className="w-full flex flex-wrap bg-[rgba(6,7,32,0.05)] font-semibold uppercase text-[rgba(0,0,0,0.7)]">
        <div
          onClick={() => setActive(1)}
          className={`${active === 1 ? activeStyle : nonActiveStyle}`}
        >
          English
        </div>
        <div
          onClick={() => setActive(2)}
          className={`${active === 2 ? activeStyle : nonActiveStyle}`}
        >
          Quantitative Reasoning
        </div>
        <div
          onClick={() => setActive(3)}
          className={`${active === 3 ? activeStyle : nonActiveStyle}`}
        >
          Biology
        </div>
        <div
          onClick={() => setActive(4)}
          className={`${active === 4 ? activeStyle : nonActiveStyle}`}
        >
          Geography
        </div>
        <div
          onClick={() => setActive(5)}
          className={`${active === 5 ? activeStyle : nonActiveStyle}`}
        >
          Current Affairs
        </div>
      </div>
      <div className="w-full mt-2">
        {active === 1 && <English />}
        {active === 2 && <Quantitative />}
        {active === 3 && <Biology />}
        {active === 4 && <Geography />}
        {active === 5 && <CurrentAffairs />}
      </div>
    </div>
  );
};

export default Blog;
