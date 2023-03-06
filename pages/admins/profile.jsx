import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getAdminUsers } from '../../services/adminService';

const Profile = () => {
  const router = useRouter();
  const { token, adminViewAdminProfile } = useSelector((state) => state.user);

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  '>
          <div className='pt-[110px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <div className='flex justify-between mb-[20px] md:mb-[49px]'>
              <h2 className='font-[500] text-[24px] leading-7'>Profile</h2>
            </div>
            <div
              className='mt-[10px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
              style={{
                boxShadow:
                  '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {adminViewAdminProfile && (
                <div>{adminViewAdminProfile.firstName}</div>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Profile;
