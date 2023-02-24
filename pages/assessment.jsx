import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { ImUsers } from "react-icons/im";
import { HiOutlineUserGroup } from "react-icons/hi";
import Link from "next/link";

const DashboardCard = ({ icon, figure, title, middle, bg, textColor }) => (
  <div
    className={`${
      middle && "my-[20px] md:my-0"
    }  w-[300px] h-[111px] flex flex-col justify-center text-white dark:border dark:border-gray-200 rounded-[4px] shadow z-10`}
    style={{
      background: `${bg}`,
    }}
  >
    <div className="flex gap-[18px] items-center ">
      <img src={icon} className="mx-[29px]" />
      <div className="">
        <p className="text-[16px] font-[400] mb-[14px] text-[#404243]">
          {title}
        </p>
        <p
          className={`text-${textColor} font-[700] text-[26px] leading-7`}
          style={{ color: textColor }}
        >
          {figure}
        </p>
      </div>
    </div>
  </div>
);
const assessment = () => {
  return (
    <>
      <DashboardLayout>
        <div className="dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  ">
          <div className="pt-[90px] md:pt-[46px] mx-[15px] md:mx-[50px]">
            <h2 className="font-[500] text-[24px] leading-7">
              Answer more to earn more
            </h2>
            <div className="mt-[25px] md:mt-[60px]">
              <p className="font-[400] text-[18px] leading-6">
                Question 1 of 200
              </p>
              <div className="w-[95%]">
                <div className="w-full min-h-[84px] bg-[#060720] rounded-[8px] flex flex-col justify-center px-[15px] py-[15px] md:px-[50px] md:py-[20px]">
                  <p className=" text-[20px] text-white font-[500]text-white">
                    1. Who won the 2022 World cup in Qatar?
                  </p>
                </div>
                <div
                  className="mt-[40px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white"
                  style={{
                    boxShadow:
                      "0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex mb-[20px] md:mb-[45px] items-center">
                    <p className="font-[700] text-[16px]">A</p>
                    <input
                      type="radio"
                      name="option"
                      id="optiona"
                      className="ml-[11px]"
                    />{" "}
                    <label
                      htmlFor="optiona"
                      className="font-[400] text-[16px] leading-6 ml-[15px]"
                    >
                      Brazil
                    </label>
                  </div>
                  <div className="flex items-center mb-[20px] md:mb-[45px]">
                    <p className="font-[700] text-[16px]">B</p>
                    <input
                      type="radio"
                      name="option"
                      id="optionb"
                      className="ml-[11px]"
                    />{" "}
                    <label
                      htmlFor="optionb"
                      className="font-[400] text-[16px] leading-6 ml-[15px]"
                    >
                      Argentina
                    </label>
                  </div>
                  <div className="flex items-center mb-[20px] md:mb-[45px]">
                    <p className="font-[700] text-[16px]">C</p>
                    <input
                      type="radio"
                      name="option"
                      id="optionc"
                      className="ml-[11px]"
                    />{" "}
                    <label
                      htmlFor="optionc"
                      className="font-[400] text-[16px] leading-6 ml-[15px]"
                    >
                      France
                    </label>
                  </div>
                  <div className="flex items-center">
                    <p className="font-[700] text-[16px]">D</p>
                    <input
                      type="radio"
                      name="option"
                      id="optiond"
                      className="ml-[11px]"
                    />{" "}
                    <label
                      htmlFor="optiond"
                      className="font-[400] text-[16px] leading-6 ml-[15px]"
                    >
                      Morocco
                    </label>
                  </div>
                </div>
                <div className="flex gap-x-[35px] justify-center mb-[20px] md:mb-[100px]">
                  <button className="w-[150px] shadow border-2 px-5 py-3 flex items-center justify-center rounded">
                    <RxDoubleArrowLeft />
                    <span className="ml-[10px]">Previous</span>
                  </button>
                  <button className="w-[150px] shadow border-2 px-5 py-3 flex items-center justify-center rounded">
                    <span className="mr-[10px]">Next</span>{" "}
                    <RxDoubleArrowRight />
                  </button>
                </div>
                <div className="flex justify-center md:justify-end pb-[20px]">
                  <button className="w-[150px] bg-primaryGreen text-white px-5 py-3 flex items-center justify-center rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default assessment;
