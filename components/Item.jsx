import React from "react";
import { Paper, Button } from "@mui/material";
const Item = ({ item, galery }) => {
  console.log(item);
  return (
    <>
      <div
        className={`${
          galery ? "h-[200px]" : " md:h-[220px]"
        } w-5/6 mx-auto sm:w-4/6 md:mx-0 md:w-[400px] flex flex-col items-center justify-center text-center `}
        // style={{
        //   boxShadow: "0px 16px 16px rgba(0, 0, 0, 0.16)",
        //   borderRadius: `${galery ? "0" : "32px 0px"}`,
        // }}
      >
        <p className="font-[500] text-[18px] md:text-[20px] leading-5 mb-[40px] text-black">
          {!galery && item.testimony}
        </p>
        <img
          src={galery ? item : item.img}
          alt={galery ? "galery image" : item.name}
          className="rounded-full w-[56px] h-[56px]"
        />
        <h2 className="font-[500] text-[16px] text-center mt-[16px]">
          {!galery && item.name}
        </h2>
      </div>
    </>
  );
};

export default Item;
