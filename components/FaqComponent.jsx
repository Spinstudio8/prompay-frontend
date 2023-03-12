import React, { useState, useEffect } from 'react';
import { BsFillQuestionSquareFill } from 'react-icons/bs';

const bgColor = 'bg-gray-100';

function FaqComponent({ children, question }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${
          isOpen ? bgColor : null
        }  text-black border border-primaryGreen w-full rounded-sm px-[10px] shadow-sm py-[10px]`}
      >
        <div
          onClick={() => handleOpen()}
          className='w-full flex justify-between items-center cursor-pointer'
        >
          <div className='flex gap-4 items-center dark:text-white'>
            <div className='xs:text-[20px] xs:ml-[10px] text-primaryGreen'>
              <BsFillQuestionSquareFill />
            </div>
            <div>
              <h3 className='font-semibold'>{question}</h3>
            </div>
          </div>
          <div>
            {isOpen ? (
              <button className='text-[14px] bg-primaryBlue text-white font-semibold border border-primaryBlue hover:bg-black hover:border-black rounded px-[10px]'>
                hide
              </button>
            ) : (
              <button className='text-[14px] bg-primaryGreen text-white font-semibold border border-primaryGreen hover:bg-primaryBlue hover:border-primaryGreen rounded px-[10px]'>
                answer
              </button>
            )}
          </div>
        </div>
        {isOpen && (
          <div className='w-full flex flex-col items-center mt-4'>
            {children}
          </div>
        )}
      </div>
    </>
  );
}

export default FaqComponent;
