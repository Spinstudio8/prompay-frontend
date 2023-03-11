import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../components/DashboardLayout';
import withLoginAuth from '../auth/withLoginAuth';
import ReportProblem from '../components/support/ReportProblem';

const Support = () => {
  const dispatch = useDispatch();
  const { token, tokenPayload } = useSelector((state) => state.user);

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  '>
          <div className='pt-[110px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <div
              className='w-full bg-white min-h-[80vh] rounded-lg px-[15px] pt-[15px] pb-[25px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
              style={{
                boxShadow:
                  '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className='xs:w-[95%] lg:w-[85%] mx-auto'>
                <div className='flex justify-start mb-[20px] md:mb-[49px] mt-[10px]'>
                  <h2 className='font-[500] text-[24px] leading-7 text-black dark:text-white'>
                    Help & Support
                  </h2>
                </div>
                <ReportProblem token={token} />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default withLoginAuth(Support);
