import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getUser, removeUserSession } from '../utils/common';
import { data } from './Notification';

import { useStateContext } from '../auth/AuthContext';
import { setLogout } from '../store/slice/userSlice';
import { persistor } from './../store/store';
import FullPageLoader from './FullPageLoader';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type='button'
    onClick={customFunc}
    style={{ color }}
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'
  >
    <span
      style={{ backgroundColor: dotColor }}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
    />
    {icon}
  </button>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    logout,
    login,
    screenSize,
    setScreenSize,
    darkToggle,
    setDarkToggle,
  } = useStateContext();
  const [showFullPageLoader, setShowFullPageLoader] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [notificationdropDown, setNotificationdropDown] = useState(false);
  const user = getUser();

  const router = useRouter();
  const dispatch = useDispatch();
  const { tokenPayload, token } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(setLogout());
    setShowFullPageLoader(true);
    router.replace('/');
  };

  const handleDropDown = () => {
    if (dropDown) {
      setDropDown(false);
      setNotificationdropDown(false);
    } else {
      setDropDown(true);
    }
  };
  const handleNotificationDropDown = () => {
    setNotificationdropDown(true);
    if (notificationdropDown) {
      setDropDown(false);
      setNotificationdropDown(false);
    } else {
      setNotificationdropDown(true);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div
      className='flex justify-between p-2 relative bg-white dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
      //   style={{ borderBottom: "0.6px solid #878787" }}
    >
      <NavButton
        title='Menu'
        customFunc={() => setActiveMenu((prevState) => !prevState)}
        color='blue'
        icon={<AiOutlineMenu />}
      />

      <div className='flex'>
        {darkToggle ? (
          <NavButton
            title='Mode'
            customFunc={() => setDarkToggle((prevState) => !prevState)}
            color='white'
            icon={<FaToggleOn />}
            dotColor='black'
          />
        ) : (
          <NavButton
            title='Mode'
            customFunc={() => setDarkToggle((prevState) => !prevState)}
            color='blue'
            icon={<FaToggleOff />}
          />
        )}
        {/* <NavButton title='Chat' dotColor='#03c9D7' customFunc={() => handleClick('chat')} color='blue' icon={<BsChatLeft />} /> */}
        <div
          className={`${
            dropDown ? 'mt-[10px] md:mt-0' : 'my-3 md:my-0'
          } md:mr-[30px]  relative flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg `}
          onMouseEnter={handleDropDown}
          onClick={() => setDropDown(!dropDown)}
          onMouseLeave={() => setDropDown(false)}
          // onClick={() => handleClick("userProfile")}
        >
          <img
            src='/images/team/ino1.png'
            alt='avatar'
            className='rounded-full w-8 h-8 ml-4'
          />
          <p className='text-gray-400 text-[10px] md:text-14 font-bold ml-1'>
            {`${tokenPayload?.firstName} ${tokenPayload?.lastName}`}
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14 mr-3' />

          <ul
            className={`${
              dropDown ? 'top-[40px] opacity-100 pb-6 z-20 ' : 'hidden'
            } absolute  bg-white py-4  px-4 font-normal text-xl w-[149px]`}
            style={{
              zIndex: 2,
              boxShadow:
                '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <li className='mb-3'>
              <Link
                className='text-[#374151] hover:text-primary_blue-200 duration-500 font-[400] text-[14px] leading-6'
                href='/profile'
              >
                Profile
              </Link>
            </li>
            <li className='mb-3'>
              <Link
                className='text-[#374151] hover:text-primary_blue-200 duration-500 font-[400] text-[14px] leading-6'
                href='/wallet'
              >
                Wallet
              </Link>
            </li>
            <li className='mb-6'>
              <Link
                className='text-[#374151] hover:text-primary_blue-200 duration-500 font-[400] text-[14px] leading-6'
                href='/settings'
              >
                Settings
              </Link>
            </li>
            <li className='mb-2'>
              <button
                onClick={handleLogout}
                className='text-[#F05252] hover:text-primary_blue-200 duration-500 font-[400] text-[14px] leading-6'
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>

        <div
          className={`${
            notificationdropDown ? 'mt-[10px] md:mt-0' : 'my-3 md:my-0'
          } md:m-[30px]  relative flex items-center gap-2 hover:bg-light-gray rounded-lg  `}
          // onMouseEnter={handleNotificationDropDown}
          // onClick={() => setNotificationdropDown(!notificationdropDown)}
          // onMouseLeave={() => setNotificationdropDown(false)}
        >
          <NavButton
            title='Notifications'
            dotColor='#03c9D7'
            customFunc={() => setNotificationdropDown(!notificationdropDown)}
            color='blue'
            icon={<RiNotification3Line />}
          />
          <ul
            className={`${
              notificationdropDown
                ? 'top-[45px] right-[2px] opacity-100 z-20 '
                : 'hidden'
            } absolute  bg-white  font-normal text-xl w-[98vw] md:w-[384px] shadow-lg border rounded-lg overflow-y-auto dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white`}
            style={{
              zIndex: 20,
              boxShadow:
                '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className='flex w-full h-[40px] justify-center items-center bg-[#F9FAFB] rounded-lg dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'>
              <p className='font-[500] text-[16px] leading-6 text-[#111928] dark:text-gray-200'>
                Notifications
              </p>
            </div>
            {data.map((notification) => (
              <li className='mb-3 flex items-center border-b border-b-[#F9FAFB] pb-[15px] py-4  px-4'>
                <img
                  src={notification.image}
                  alt=''
                  className='w-[44px] h-[44px] rounded-full'
                />
                <div className=' ml-[12px]'>
                  <p className='font-[400] text-[14px] leading-6 text-[#6B7280] mb-[6px]'>
                    {notification.message}
                  </p>
                  <p className='font-[400] text-[12px] leading-6 text-[#1C64F2]'>
                    {notification.time}
                  </p>
                </div>
              </li>
            ))}
            <div className='flex w-full h-[40px] justify-center items-center bg-[#F9FAFB] rounded-lg'>
              <IoEyeSharp color='#6B7280' />
              <p className='font-[500] text-[16px] leading-6 text-[#111928] ml-[8px]'>
                View All
              </p>
            </div>
          </ul>
        </div>
        {/* { isClicked.cart && <Cart /> }
        { isClicked.chat && <Chat /> }
        { isClicked.notification && <Notification /> }
        { isClicked.userProfile && <UserProfile /> } */}
      </div>
      {showFullPageLoader && <FullPageLoader />}
    </div>
  );
};

export default Navbar;
