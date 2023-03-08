import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FcMenu } from 'react-icons/fc';
import Image from 'next/image';
import { useRouter } from 'next/router';
const Nav = ({ path }) => {
  const token = useSelector((state) => state.user.token);

  const currentPath = useRouter().pathname;

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  return (
    <nav
      className={`z-[30] relative ${menu ? 'opacity-3' : 'opacity-[0.8]'}  `}
      style={{
        background: 'rgba(6, 7, 32, 0.05)',
        borderBottom: '1px solid rgba(0, 166, 81, 0.3)',
      }}
    >
      <div className='md:py-3  px-[24px] text-white h-[80px] md:h-[60px] w-screen md:flex md:items-center text-[20px] justify-between '>
        <div className='flex justify-between items-center h-full cursor-pointer mx-3'>
          <Link
            className='text-[20px] hover:text-primary duration-500'
            href='/'
          >
            <Image
              src='/images/logo.png'
              width={92}
              height={50}
              className=''
              alt='logo'
            />
          </Link>
          <FcMenu
            color='#ffffff'
            size='40'
            className='text-white md:hidden'
            onClick={handleMenu}
          />
        </div>
        <div
          className={`${
            menu
              ? 'top-[60px] opacity-100 pb-6 z-10 h-screen bg-white'
              : 'hidden'
          } md:basis-[70%] md:flex md:justify-between md:items-center md:static absolute md:bg-transparent bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 font-normal text-[20px]`}
        >
          <ul className='md:flex md:justify-between'>
            <li className='my-3 md:my-0'>
              <Link
                className={`${
                  path === '/'
                    ? 'text-[#006F36] border-2 py-1 font-[700] border-[#006F36] px-1 rounded'
                    : ''
                } text-[16px] font-[700]  duration-500 `}
                href='/'
              >
                Home
              </Link>
            </li>
            <li className='md:ml-[40px] my-3 md:my-0'>
              <Link
                className={`${
                  path === '/about'
                    ? 'text-[#006F36] border-2 py-1 font-[700] border-[#006F36] px-1 rounded'
                    : ''
                } text-[16px] font-[700]  duration-500 `}
                href='/about'
              >
                About Us
              </Link>
            </li>
            <li className='md:ml-[40px] my-3 md:my-0'>
              <Link
                className={`${
                  path === '/process' &&
                  'text-[#006F36] border-2 py-1 font-[700] border-[#006F36] px-1 rounded'
                } text-[16px] font-[700]  duration-500 `}
                href='/howItWorks'
              >
                Our Process
              </Link>
            </li>
            <li className='md:ml-[40px] my-3 md:my-0'>
              <Link
                className={`${
                  path === '/faq' &&
                  'text-[#006F36] border-2 py-1 font-[700] border-[#006F36] px-1 rounded'
                } text-[16px] font-[700]  duration-500 `}
                href='/'
              >
                FAQ
              </Link>
            </li>
            <li className='md:ml-[40px] my-3 md:my-0'>
              <Link
                className={`${
                  path === '/contact' &&
                  'text-[#006F36] border-2 py-1 font-[700] border-[#006F36] px-1 rounded'
                } text-[16px] font-[700]  duration-500 `}
                href='/contact'
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className='flex justify-center items-center '>
            {!token && (
              <>
                <Link
                  href='/signin'
                  className='py-[16px] px-[16px] rounded-lg text-[14px] font-[500] leading-5 text-center'
                >
                  Login
                </Link>
                <Link
                  href='/signup'
                  className='bg-primaryGreen w-[94px] py-3 rounded-lg text-[14px] font-[500] text-center'
                >
                  Get Started
                </Link>
              </>
            )}
            {token && (
              <Link
                href='/dashboard'
                className='py-[16px] px-[16px] rounded-lg text-[14px] font-[500] leading-5 text-center'
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
