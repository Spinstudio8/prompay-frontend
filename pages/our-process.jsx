import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Info from '../components/Info';
import Slider from '../components/Slider';
import Link from 'next/link';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import Animation from '../components/Animation';
import { useRouter, withRouter } from 'next/router';
import MobileComingSoon from './../components/MobileComingSoon';

export default function OurProcess() {
  const token = useSelector((state) => state.user.token);
  const router = useRouter().pathname;

  return (
    <>
      <Meta title='Prompay | Home' />
      {/* <Animation style="flip-left" placement="center-center"> */}
      <div className="relative bg-[url('/images/bg/home.png')] h-[100vh] md:h-[160vh] bg-cover bg-center">
        <div
          className='absolute top-0 left-0 right-0 bottom-0 min-h-[100vh] z-[1]'
          style={{
            background:
              'linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)',
          }}
        />
        <Nav path={router} />
        <div className='flex flex-col items-center md:items-end justify-center relative text-white z-10 md:pr-[27px] text-center h-[65%]'>
          <div className='w-full md:w-[538px] md:mt-[0px]'>
            <h1 className='text-white text-[40px] md:text-[100px] font-[700] leading-[50px] md:leading-[100px] '>
              Learn first Then earn.
            </h1>
            <p className='text-[20px] md:text-[29px] leading-6 md:leading-10 my-[20px]  '>
              Test your Ability with our online Exam and earn if you pass or
              learn if you fail.
            </p>
            <div className='flex gap-[24px] justify-center mt-[20px] md:mt-0'>
              {!token && (
                <>
                  <Link
                    href='/signup'
                    className='bg-transparent hover:bg-primaryGreen py-[16px] px-[24px] w-[154px] h-[56px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center'
                  >
                    Sign Up
                  </Link>
                  <Link
                    href='/signin'
                    className='bg-primaryGreen hover:bg-transparent hover:border py-[16px] px-24px w-[154px] h-[56px] rounded-lg text-[16px] font-[900] leading-5 text-center'
                  >
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </Animation> */}
      <Info />
      {/* <div
        className="absolute top-0 left-0 right-0 bottom-0 h-[160vh] z-[1]"
        style={{
          background:
            "linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)",
        }}
      /> */}
      <Animation style='fade-up' placement='center-center'>
        <section className="relative z-20 py-[52px] px-[16px] sm:px-[50px] md:px-[100px] md:flex justify-evenly text-white bg-[url('/images/bg/home.png')] md:h-[457px] bg-cover bg-fixed bg-center  break">
          <div
            className='absolute top-0 left-0 right-0 bottom-0 z-[1] h-full md:h-[457px]'
            style={{
              background:
                'linear-gradient(98.01deg, rgba(12, 112, 10, 0.9) 6.63%, rgba(4, 31, 3, 0.9) 49.83%)',
            }}
          />
          <div className='relative z-20 mb-[30px] md:mb-[0]'>
            <h3 className='font-[700] text-[25px] md:text-[40px] leading-7 mb-[15px] md:mb-[32px]'>
              Here’s our process
            </h3>
            <ul>
              <li className=' font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>Visit prompay.com and
                sign up
              </li>
              <li className='mt-[16px] md:mt-[24px] font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>Fill in your details
                and complete your profile
              </li>
              <li className='mt-[16px] md:mt-[24px] font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>After you have signed
                up and completed your profile, take assessments to start earning
              </li>
              <li className='mt-[16px] md:mt-[24px] font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>Complete each
                assessment and earn money
              </li>
              <li className='mt-[16px] md:mt-[24px] font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>Better results equal
                more money
              </li>
            </ul>
          </div>
          <div className='relative z-20'>
            <h3 className='font-[700] text-[25px] md:text-[40px] leading-7 mb-[15px] md:mb-[32px]'>
              Benefits at a glance
            </h3>
            <ul>
              <li className=' font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>Easy start with
                assessments
              </li>
              <li className='mt-[16px] md:mt-[24px] font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>Learn, unlearn,
                relearn and earn
              </li>
              <li className='mt-[16px] md:mt-[24px] font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>Input your account
                details and get paid on a weekly basis
              </li>
              <li className='mt-[16px] md:mt-[24px] font-[700] text-18px] leading-5'>
                <span className='mr-[13px]'>&#9679;</span>24/7 support from our
                prompay community
              </li>
            </ul>
          </div>
        </section>
      </Animation>
      <Animation style='fade-left' placement='center-center'>
        <section className='bg-white py-[112px] px-[15px] text-black'>
          <h1 className='font-[700] text-[30px] md:text-[80px] leading-[30px] md:leading-[80px] mb-[24px] text-center '>
            Earn With promPay
          </h1>
          <p className='text-center font-[400] text-[20px] md:text-[28px] mb-[20px] md:mb-[80px]'>
            What promPay users say
          </p>
          <Slider />
        </section>
      </Animation>
      <Animation style='zoom-in-left' placement='center-center'>
        <section className="relative z-20 py-[52px]  text-white bg-[url('/images/bg/join.png')] bg-cover bg-fixed bg-center h-[100vh] break">
          <div
            className='absolute top-0 left-0 right-0 bottom-0 h-[100vh] z-[1]'
            style={{
              background:
                'linear-gradient(261.98deg, rgba(6, 7, 32, 0.28) 8.27%, rgba(6, 7, 32, 0.28) 91.06%)',
            }}
          />
          <div className='relative z-10 flex flex-col h-full items-center justify-center'>
            <h1 className='font-[700] text-[35px] md:text-[80px] text-center'>
              Why not join us?
            </h1>
            <div className='flex gap-[24px] justify-center mt-[30px] md:mt-[95px]'>
              <Link
                href='/signup'
                className='bg-transparent hover:bg-primaryGreen py-[16px] px-24px w-[154px] h-[56px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center'
              >
                Sign Up
              </Link>
              <Link
                href='/signin'
                className='bg-primaryGreen hover:bg-transparent hover:border py-[16px] px-24px w-[154px] h-[56px] rounded-lg text-[16px] font-[900] leading-5 text-center'
              >
                Log In
              </Link>
            </div>
          </div>
        </section>
      </Animation>
      <Animation style='fade-down-right' placement='center-center'>
        <MobileComingSoon />
      </Animation>
      <Footer />
    </>
  );
}
