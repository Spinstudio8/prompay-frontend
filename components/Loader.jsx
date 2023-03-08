import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div>
        <RotatingLines
          strokeColor='green'
          strokeWidth='5'
          animationDuration='0.75'
          width='40'
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
