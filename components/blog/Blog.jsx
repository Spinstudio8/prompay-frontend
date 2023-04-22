import React from "react";

const activeStyle =
  "bg-primaryGreen text-white border-l-2 border-r-2 border-white px-2 py-1 cursor-pointer rounded-md";
const nonActiveStyle =
  "border-l-2 border-r-2 border-white px-2 py-1 cursor-pointer hover:text-black hover:rounded-md";

const Blog = () => {
  return (
    <div className="w-11/12 md:w-[80%] mx-auto text-black">
      <div className="w-full py-[5rem]">
        <h1 className="text-[25px] md:text-[50px] font-bold">Prompay Blog</h1>
        <p className="mt-4">Learn Before You Earn</p>
      </div>
      <h2 className="text-[18px] text-primaryGreen font-semibold">
        One step at a time
      </h2>
      <div className="w-full flex bg-[rgba(6,7,32,0.05)] font-semibold uppercase text-[rgba(0,0,0,0.7)]">
        <div className={`${activeStyle}`}>English</div>
        <div className={`${nonActiveStyle}`}>Maths</div>
        <div className={`${nonActiveStyle}`}>Biology</div>
        <div className={`${nonActiveStyle}`}>Geography</div>
        <div className={`${nonActiveStyle}`}>Current Affairs</div>
        <div className={`${nonActiveStyle}`}>Quantitative Reasoning</div>
      </div>
    </div>
  );
};

export default Blog;
