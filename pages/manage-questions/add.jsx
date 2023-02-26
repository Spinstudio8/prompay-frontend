import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';

const AddQuestion = () => {
  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  '>
          <div className='pt-[90px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <div className='flex justify-between mb-[20px] md:mb-[49px]'>
              <h2 className='font-[500] text-[24px] leading-7'>
                Add new question
              </h2>
            </div>
            <div className='mt-10'>Add here</div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddQuestion;
