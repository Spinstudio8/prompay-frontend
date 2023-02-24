import React from "react";

const TeamCard = ({ image, name, title }) => {
  return (
    <div className="w-4/5 mx-auto text-white mb-[15px]">
      <img src={image} alt={name} className="w-[268px] h-[195px]" />
      <h3 className=" text-[24px] md:text-[33px] font-[700] leading-6 mt-[15px] md:mt-[25px] mb-1">
        {name}
      </h3>
      <p
        className="font-[700] text-[18px] md:text-[20px] leading-6"
        style={{ color: "rgba(255, 255, 255, 0.6)" }}
      >
        {title}
      </p>
    </div>
  );
};

export default TeamCard;
