import React from 'react';

const Card = ({ image, title, description, link }) => {
  return (
    <div className='w-4/5 md:w-[370px] mx-auto h-[380px] bg-white text-primaryBlue rounded-lg flex flex-col items-center justify-center'>
      <img src={image} alt='' />
      <h3 className='my-[16px] text-[24px] font-[600] leading-6 text-center'>
        {title}
      </h3>
      <p className='font-[400] text-[14px] leading-5 text-center w-4/5 md:w-[283px]'>
        {description}
      </p>
      <button className='text-primaryBlue mt-[16px] border border-primaryBlue py-3 px-6 rounded-md hover:bg-primaryBlue hover:text-white text-[16px] font-[500]'>
        Learn more
      </button>
    </div>
  );
};

export default Card;
