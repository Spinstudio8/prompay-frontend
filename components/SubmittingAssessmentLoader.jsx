import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function SubmittingAssessmentLoader() {
  return (
    <>
      <div className='bg-[rgba(0,0,0,0.8)] w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[9000]'>
        <div className='flex flex-col items-center justify-center'>
          <div>
            <RotatingLines
              strokeColor='white'
              strokeWidth='5'
              animationDuration='0.75'
              width='35'
              visible={true}
            />
          </div>
          <p className='mt-6 text-white text-center sm:text-left md:text-[1.2rem]'>
            Submitting and computing your result...
          </p>
        </div>
      </div>
    </>
  );
}
