import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useRouter } from 'next/router';
import Meta from '../components/Meta';
import { login } from '../services/authService';
import ButtonLoader from '../components/ButtonLoader';
import NotVerifiedPopup from '../components/NotVerifiedPopup';
import {
  setLogin,
  removeVerificationEmail,
  setUser,
} from '../store/slice/userSlice';
import withLogoutAuth from '../auth/withLogoutAuth';

const Signin = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [notVerifiedPopupState, setNotVerifiedPopupState] = useState(false);
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    setLoadingSubmit(true);

    const loginUser = async () => {
      try {
        const { data } = await login(state);
        dispatch(setLogin(data.token));
        dispatch(setUser({ userInfo: data.userInfo }));
        setIsError(false);
        router.replace('/dashboard');
      } catch (err) {
        const res = err.response;
        if (
          res &&
          res.status === 401 &&
          res.data &&
          res.data.isVerified === false
        ) {
          setNotVerifiedPopupState(!notVerifiedPopupState);
        }
        setIsError(true);
        if (res && res.data) {
          setErrorMessage(err.response.data.message);
        }
        setLoadingSubmit(false);
      }
    };

    loginUser();
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
    dispatch(removeVerificationEmail());
  }, []);

  const navbar = router.pathname;
  return (
    <>
      <Meta title='Prompay | Sign in' />

      <div
        data-aos='fade-left'
        className="relative bg-[url('/images/bg/login.png')] bg-cover bg-center z-10 md:pb-[52px] md:z-0 "
      >
        <div
          className='absolute top-0 left-0 right-0 bottom-0  z-[1] h-full'
          style={{
            background: 'rgba(6, 7, 32, 0.73)',
          }}
        />
        <Nav path={navbar} />
        <div className='h-full flex items-center justify-center py-[20px]'>
          {/* <Animation style="flip-left" placement="center-center"> */}
          <div className='relative z-10 w-4/5 md:w-[722px] md:h-[600px] bg-white shadow-sm mx-auto flex flex-col items-center justify-center py-4 text-black'>
            <h3 className='font-[700] text-[24px]'>Sign In</h3>
            <p className='font-[300] text-[15px] leading-4 my-[14px] text-center'>
              Welcome back! Please login to your account.
            </p>
            {isError && (
              <p className='text-red-700 text-center'>{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
              {/* <div className="flex gap-x-[31px] mt-[29px]"> */}
              <div className='mt-[15px] md:mt-[25px] '>
                <label
                  htmlFor='email'
                  className='font-[300] text-[15px] leading-8 block text-[#979292]'
                >
                  Username/Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  value={state.email}
                  onChange={handleChange}
                  className='w-full md:w-[397px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                />
              </div>
              <div className='mt-[15px] md:mt-[29px]'>
                <label
                  htmlFor='Password'
                  className='font-[300] text-[15px] leading-8 block text-[#979292]'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='Password'
                  placeholder='Password'
                  value={state.password}
                  onChange={handleChange}
                  className='w-full md:w-[397px] mx-auto md:mx-0 h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                />
              </div>
              <div className='md:flex justify-between mt-[29px]'>
                <div className='flex gap-x-[19px]'>
                  <input type='checkbox' id='remember' />{' '}
                  <label
                    htmlFor='remember'
                    className='font-[300] text-[15px] leading-8 text-[#667085]'
                  >
                    Remember Me
                  </label>
                </div>
                <Link
                  href='/reset-password'
                  className='text-[#667085] underline'
                >
                  Forgot Password ?
                </Link>
              </div>
              <div className='flex gap-[24px] justify-center mt-[20px] mb-3 md:mt-[60]'>
                {loadingSubmit ? (
                  <ButtonLoader />
                ) : (
                  <button
                    type='submit'
                    className='hover:bg-primaryBlue  bg-primaryGreen text-white py-[16px] px-24px w-[154px] h-[56px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center'
                  >
                    Sign In
                  </button>
                )}
              </div>
            </form>
          </div>
          {/* </Animation> */}
        </div>
      </div>
      <NotVerifiedPopup
        notVerifiedPopupState={notVerifiedPopupState}
        setNotVerifiedPopupState={setNotVerifiedPopupState}
        email={state.email}
      />
      <Footer />
    </>
  );
};

export default withLogoutAuth(Signin);
