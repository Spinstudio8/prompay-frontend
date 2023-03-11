import React from 'react';
import Link from 'next/link';

export default function MobileComingSoon() {
  return (
    <>
      <section className='flex flex-col md:flex-row px-[20px] md:px-[100px] justify-center items-center  md:h-[495px] pt-[30px] md:pt-[0] bg-white'>
        <img src='/images/mobile.png' alt='mobile mockup' />
        <div className='flex flex-col justify-center md:justify-start md:ml-[152px]'>
          <img
            src='/images/logo.png'
            alt='propay logo'
            className='w-[132px] h-[72px] mx-auto md:mx-0 mt-[20px] mb-[10px] md:mb-0 md:mt-0'
          />
          <p className='mt-[16px] mb-[32px] font-[400] text-[24px] leading-6 text-[#1F1F1F]'>
            Earn money using your smartphone and check your account directly in
            the app. <Link href='/our-process'>Learn more</Link>
          </p>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='flex gap-3 justify-center mb-[20px] md:mb-0'>
              <img
                src='/images/appstore.png'
                alt='propay logo'
                className='w-[130px] md:w-[201px] h-[48px] md:h-[58px]'
              />
              <img
                src='/images/googleplay.png'
                alt='propay logo'
                className='w-[130px] md:w-[201px] h-[48px] md:h-[58px]'
              />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img src='/images/construction.png' alt='propay logo' />
              <p className='font-[700] text-[25px] md:text-[40px] text-primaryGreen leading-6 mb-[20px] md:mb-0'>
                COMING SOON
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
