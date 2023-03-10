import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function ButtonLoader() {
  return (
    <>
      <RotatingLines
        strokeColor='green'
        strokeWidth='5'
        animationDuration='0.75'
        width='30'
        visible={true}
      />
    </>
  );
}
