import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import Link from "next/link";

const DashboardCard = ({ icon, figure, title, middle, bg, textColor }) => (
  <div
    className={`${
      middle && "mt-[20px] md:my-0"
    } w-[260px] md:w-[300px] h-[90px] md:h-[111px] flex flex-col justify-center text-white dark:border dark:border-gray-200 rounded-[4px] shadow z-10`}
    style={{
      background: `${bg}`,
    }}
  >
    <div className="flex gap-[18px] items-center ">
      <img src={icon} className="mx-[15px] md:mx-[29px]" />
      <div className="">
        <p className="text-[16px] font-[400] mb-[8px] md:mb-[14px] text-[#8db0c2]">
          {title}
        </p>
        <p
          className={`text-${textColor} font-[700] text-[18px] md:text-[26px] leading-7`}
          style={{ color: textColor }}
        >
          {figure}
        </p>
      </div>
    </div>
  </div>
);
const dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <div className="dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white pt-[50px] md:pt-0">
          <div className="md:flex w-[100%] gap-x-[13px] md:ml-[20px] pb-[15px]">
            <div className=" md:w-[65%] mt-[30px] bg-white shadow pb-[30px] flex flex-col items-center dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white ">
              <div className=" md:flex items-center gap-x-[15px] px-[25px] pt-[30px] ">
                {/* <Link href="/total-votes"> */}
                <DashboardCard
                  icon="/images/icon/user.png"
                  figure={0}
                  title="English"
                  bg="rgba(221,252,220,1)"
                  textColor="#1A8F56"
                />
                {/* </Link> */}
                {/* <Link href="/nominees"> */}
                <DashboardCard
                  icon="/images/icon/quant.png"
                  figure={0}
                  middle
                  title="Quantitative reasoning"
                  bg="#F6FAFD"
                  textColor="#3297EF"
                />
                {/* </Link> */}
              </div>
              <div className=" md:flex items-center gap-x-[15px] py-[30px] px-[20px] ">
                {/* <Link href="/categories"> */}
                <DashboardCard
                  icon="/images/icon/biology.png"
                  figure={0}
                  title="Biology"
                  bg="#FDF7F2"
                  textColor="#B65800"
                />
                {/* </Link> */}
                {/* <Link href="/subcategories"> */}
                <DashboardCard
                  icon="/images/icon/commerce.png"
                  figure={0}
                  middle
                  title="Comerce"
                  bg="#F8F5FC"
                  textColor="#9545F8"
                />
                {/* </Link> */}
              </div>
              <div className=" md:flex items-center gap-x-[15px] px-[20px] ">
                {/* <Link href="/candidates"> */}
                <DashboardCard
                  icon="/images/icon/current.png"
                  figure={0}
                  title="Current Affairs"
                  bg="#E7FDE3"
                  textColor="#33F110"
                />
                {/* </Link> */}
                {/* <Link href="/reservations"> */}
                <DashboardCard
                  icon="/images/icon/football.png"
                  figure={0}
                  middle
                  title="Best of football"
                  bg="#F8F9FD"
                  textColor="#0012B6"
                />
                {/* </Link> */}
              </div>
              <div className=" md:flex items-center gap-x-[15px] px-[20px] pt-[20px]">
                {/* <Link href="/candidates"> */}
                <DashboardCard
                  icon="/images/icon/total.png"
                  figure={0}
                  title="Total Scores"
                  bg="#F8F8FB"
                  textColor="#4E4DA4"
                />
                {/* </Link> */}
                {/* <Link href="/reservations"> */}
                <DashboardCard
                  icon="/images/icon/test.png"
                  figure={0}
                  middle
                  title="No. of test taken"
                  bg="#F6FCF9"
                  textColor="#4FE3A5"
                />
                {/* </Link> */}
              </div>
            </div>
            <div className="bg-white shadow h-[100vh] mt-[30px] md:w-[29%] pt-[18px] flex flex-col items-center dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white">
              <div className="">
                <div
                  className="w-[280px] h-[180px] flex flex-col justify-center text-white dark:border mt-[20px] mx-[10px] dark:border-gray-200 rounded-[4px] shadow z-10"
                  style={{
                    background: "#00A651",
                  }}
                >
                  <div className="pl-[80px] ">
                    <p className="text-[32px] font-[500] text-white">
                      #233,500
                      <small className="text-[20px] font-[500] text-white">
                        .89
                      </small>
                    </p>
                    <p
                      className={`text-white font-[500] text-[20px] leading-7 mt-[30px]`}
                    >
                      Earnings
                    </p>
                  </div>
                </div>
                <div className="px-[10px] pt-[30px] md:pt-[105px]">
                  <Link href="/reservations">
                    <div
                      className="w-[280px] h-[111px] flex flex-col justify-center text-white dark:border mt-[20px] mx-[10px] dark:border-gray-200 rounded-[4px] shadow z-10"
                      style={{
                        background: "#060720",
                      }}
                    >
                      <div className="flex gap-[18px] items-center pl-[18px] ">
                        <img src="/images/icon/total.png" alt="" />
                        <div className="">
                          <p className="text-[16px] font-[400] text-white">
                            Total Scores
                          </p>
                          <p
                            className={`text-white font-[700] text-[26px] leading-7`}
                          >
                            0
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default dashboard;
