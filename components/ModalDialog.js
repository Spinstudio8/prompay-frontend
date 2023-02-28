import React from 'react';

const ModalDialog = ({ children, showModal }) => {
  return (
    <>
      {showModal && (
        <div className='bg-[rgba(0,0,0,0.6)] w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[2000]'>
          <div className='relative bg-white flex flex-col items-center justify-center py-[20px] px-[20px] sm:px-[40px] rounded-lg'>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDialog;
