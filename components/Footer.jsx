import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-primaryBlue h-[366px]  text-white relative">
        <div className="flex justify-center md:justify-between  ">
          <div className="pt-[71px] md:px-[300px]">
            <p className="font-[600] text-[20px] md:text-[28px] leading-8 w-[207px]">
              Are you excited for{" "}
              <img
                src="./images/logo.png"
                alt="prompay logo"
                className="w-[91.67px] h-[50px] inline"
              />{" "}
              ?{" "}
            </p>
            <p className="font-[400] text-[14px] mt-[8px] mb-[44px]">
              Start earning while learning
            </p>
            <Link
              href="/signup"
              className="bg-transparent hover:bg-primaryGreen py-[16px] px-[24px] w-[207px] h-[56px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center mt-[20px] "
            >
              Get Started
            </Link>
          </div>
          <img
            src="images/phoneside.png"
            alt="mockup"
            className="absolute top-[-70px] md:right-[300px] z-[1] hidden md:block"
          />
        </div>
      </div>
      <div
        className="h-[60vh] md:h-[178px] z-10 relative md:px-[300px] text-white flex flex-col items-center md:items-stretch justify-center"
        style={{
          background:
            "linear-gradient(92.56deg, #060720 47.49%, rgba(7, 7, 32, 0.96) 68.74%)",
        }}
      >
        <div className="md:flex">
          <div className="md:flex-1">
            <p className="w-[159px] font-[500] text-[20px]">
              Grow your <span className="text-[#8E24F8]">Shopify revenue</span>
            </p>
            <p className="w-[201px] font-[400] text-[10px] leading-3 mt-[13px]">
              Text marketing is the #1 way to increase your revenue and retain
              your customers LTV. In 5 minutes you can automate 1000’s in
              revenue
            </p>
          </div>
          <div
            className="flex justify-between mt-[20px] md:mt-0
          md:gap-x-[100px]"
          >
            <div className="">
              <p className="font-[600] text-[14px] leading-4">Product</p>
              <ul>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  Shopify
                </li>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  Shopify
                </li>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  Shopify
                </li>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  Shopify
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-[600] text-[14px] leading-4">Company</p>
              <ul>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  About US
                </li>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  Career
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-[600] text-[14px] leading-4">Support</p>
              <ul>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  Terms{" "}
                </li>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  Privacy{" "}
                </li>
                <li className="font-[400] text-[10px] leading-3 mt-[16px]">
                  TCPA{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
