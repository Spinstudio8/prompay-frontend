import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { getOverview } from '../services/adminService';

const DashboardCard = ({ icon, figure, title, middle, bg, textColor }) => (
  <div
    className={`${
      middle && 'mt-[20px] md:my-0'
    } w-[260px] md:w-[300px] h-[90px] md:h-[111px] flex flex-col justify-center text-white dark:border dark:border-gray-200 rounded-[4px] shadow z-10`}
    style={{
      background: `${bg}`,
    }}
  >
    <div className='flex gap-[18px] items-center '>
      <img src={icon} className='mx-[15px] md:mx-[29px]' />
      <div className=''>
        <p className='text-[16px] font-[400] mb-[8px] md:mb-[14px] text-[#8db0c2]'>
          {title}
        </p>
        <p
          className={`text-${textColor} font-[700] text-[18px] md:text-[26px] leading-7`}
          style={{ color: textColor }}
        >
          {figure}
        </p>
      </div>
    </div>
  </div>
);

const overview = () => {
  const { tokenPayload, token } = useSelector((state) => state.user);
  const [adminOverview, setAdminOverview] = useState({
    totalPaidOut: 0,
    totalQuestions: 0,
    totalTestTaken: 0,
    totalUsers: 0,
    weeklyPayable: 0,
    wallet: 0,
  });
  const [loadingOverview, setLoadingOverview] = useState(true);

  useEffect(() => {
    const getAdminOverview = async () => {
      try {
        const { data } = await getOverview(token);
        setAdminOverview(data);
        setLoadingOverview(false);
      } catch (err) {}
    };

    getAdminOverview();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white pt-[50px] md:pt-0'>
          <div className='flex flex-col lg:flex-row w-[100%] gap-x-[13px] lg:ml-[20px] pb-[15px]'>
            <div className='lg:w-[65%] lg:h-[90vh] order-1 lg:order-[0] mt-[30px] bg-white shadow pb-[30px] flex flex-col items-center dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white '>
              {!loadingOverview && (
                <>
                  <div className=' md:flex items-center gap-x-[15px] px-[25px] pt-[30px] '>
                    {/* <Link href="/total-votes"> */}
                    <DashboardCard
                      icon='/images/icon/user.png'
                      figure={adminOverview.totalPaidOut}
                      title={'Total Paid Out'}
                      bg='rgba(221,252,220,1)'
                      textColor='#1A8F56'
                    />
                    {/* </Link> */}
                    {/* <Link href="/nominees"> */}
                    <DashboardCard
                      icon='/images/icon/quant.png'
                      middle
                      figure={adminOverview.weeklyPayable}
                      title={'Weekly Payable'}
                      bg='#F6FAFD'
                      textColor='#3297EF'
                    />
                    {/* </Link> */}
                  </div>
                  <div className=' md:flex items-center gap-x-[15px] py-[30px] px-[20px] '>
                    {/* <Link href="/categories"> */}
                    <DashboardCard
                      icon='/images/icon/biology.png'
                      figure={adminOverview.totalQuestions}
                      title={'Total Questions'}
                      bg='#FDF7F2'
                      textColor='#B65800'
                    />
                    {/* </Link> */}
                    {/* <Link href="/subcategories"> */}
                    <DashboardCard
                      icon='/images/icon/commerce.png'
                      middle
                      figure={adminOverview.totalTestTaken}
                      title={'Total Test'}
                      bg='#F8F5FC'
                      textColor='#9545F8'
                    />
                    {/* </Link> */}
                  </div>
                  <div className=' md:flex items-center gap-x-[15px] px-[20px] '>
                    {/* <Link href="/candidates"> */}
                    <DashboardCard
                      icon='/images/icon/current.png'
                      figure={adminOverview.totalUsers}
                      title={'Total Users'}
                      bg='#E7FDE3'
                      textColor='#33F110'
                    />
                    {/* </Link> */}
                    <DashboardCard
                      icon='/images/icon/current.png'
                      figure={''}
                      title={'Admin Dashboard'}
                      bg='#E7FDE3'
                      textColor='#33F110'
                    />
                  </div>
                </>
              )}
              {loadingOverview && <div className='mt-6'>Loading...</div>}
            </div>
            <div className='bg-white shadow mt-[30px] lg:w-[29%] pt-[18px] pb-[38px]  flex flex-col items-center dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'>
              <div className='flex flex-col sm:flex-row lg:flex-col gap-10'>
                <div
                  className='w-[280px] h-[180px] flex flex-col justify-center text-white dark:border mt-[20px] mx-[10px] dark:border-gray-200 rounded-[4px] shadow z-10'
                  style={{
                    background: '#6200EA',
                  }}
                >
                  <div className='pl-[80px] '>
                    <p className='text-[32px] font-[500] text-white'>
                      ₦{adminOverview.wallet}
                      <small className='text-[20px] font-[500] text-white'>
                        .00
                      </small>
                    </p>
                    <p
                      className={`text-white font-[500] text-[20px] leading-7 mt-[30px]`}
                    >
                      Earnings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default overview;
