import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { useRouter } from 'next/router';
import Meta from '../../components/Meta';
import ButtonLoader from '../../components/ButtonLoader';
import {
  setNewPassword,
  verifyPasswordToken,
} from '../../services/userService';
import ModalDialog from '../../components/ModalDialog';
import Loader from '../../components/Loader';

const NewPassword = () => {
  const router = useRouter();
  const { passwordToken } = router.query;

  const [passwordInfo, setPasswordInfo] = useState({
    userId: '',
    passwordToken: '',
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loader, setLoader] = useState(false);

  const [showContinueModal, setShowContinueModal] = useState(true);
  const [showExpireModal, setShowExpireModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const verifyToken = async () => {
    setShowContinueModal(false);
    setLoader(true);

    try {
      const { data } = await verifyPasswordToken(passwordToken);
      setPasswordInfo({
        userId: data.userId,
        passwordToken: data.passwordToken,
      });
      setLoader(false);
    } catch (err) {
      setLoader(false);
      setShowExpireModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setErrorMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      setLoadingSubmit(false);
      return;
    }

    try {
      const { data } = await setNewPassword(
        passwordInfo.userId,
        passwordInfo.passwordToken,
        password
      );
      setModalMessage(data.message);
      setShowModal(true);
    } catch (err) {
      if (err.response && err.response?.data) {
        setErrorMessage(err.response.data.message);
      }
      setLoadingSubmit(false);
    }
  };

  // useEffect(() => {

  // }, [token]);

  const navbar = router.pathname;
  return (
    <>
      {loader && <Loader />}
      <Meta title='Prompay | Reset Password' />
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
            <h3 className='font-[700] text-[24px]'>Reset Password</h3>
            <p className='font-[300] text-[15px] leading-4 my-[14px] text-center'>
              Provide new password!
            </p>
            {errorMessage && (
              <p className='text-red-600 text-center text-[14px]'>
                {errorMessage}
              </p>
            )}
            <form onSubmit={handleSubmit}>
              {/* <div className="flex gap-x-[31px] mt-[29px]"> */}
              <div className='mt-[15px] md:mt-[25px] '>
                <label
                  htmlFor='password'
                  className='font-[300] text-[15px] leading-8 block text-[#979292]'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full md:w-[397px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                />
              </div>
              <div className='mt-[15px] md:mt-[29px] '>
                <label
                  htmlFor='confirmPassword'
                  className='font-[300] text-[15px] leading-8 block text-[#979292]'
                >
                  Confirm Password
                </label>
                <input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='repeat password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='w-full md:w-[397px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                />
              </div>
              <div className='flex gap-[24px] justify-center mt-[20px] mb-3 md:mt-[60]'>
                {loadingSubmit ? (
                  <ButtonLoader />
                ) : (
                  <button
                    type='submit'
                    className='hover:bg-primaryBlue  bg-primaryGreen text-white py-[16px] px-24px w-[154px] h-[56px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center'
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
          {/* </Animation> */}
        </div>
      </div>
      <ModalDialog showModal={showContinueModal}>
        <h1 className='mb-4 font-bold'>PASSWORD RESET</h1>
        <div className='w-full flex flex-col items-center'>
          <p className=''>Click Ok to continue...</p>
        </div>
        <div className='flex gap-6 my-6'>
          <button
            onClick={() => verifyToken()}
            className='bg-primaryGreen hover:bg-green-300 text-white px-5 py-2 flex items-center justify-center rounded'
          >
            Ok
          </button>
        </div>
      </ModalDialog>
      <ModalDialog showModal={showModal}>
        <h1 className='mb-4 font-bold'>PASSWORD RESET</h1>
        <div className='w-full flex flex-col items-center'>
          <p>{modalMessage}</p>
        </div>
        <div className='flex gap-6 my-6'>
          <Link
            onClick={() => setShowModal(false)}
            href={'/signin'}
            className='bg-primaryGreen hover:bg-green-300 text-white px-5 py-2 flex items-center justify-center rounded'
          >
            Ok
          </Link>
        </div>
      </ModalDialog>
      <ModalDialog showModal={showExpireModal}>
        <h1 className='mb-4 font-bold'>PASSWORD RESET</h1>
        <div className='w-full flex flex-col items-center'>
          <p className='text-red-600'>Token Expired</p>
        </div>
        <div className='flex gap-6 my-6'>
          <Link
            onClick={() => setShowExpireModal(false)}
            href={'/reset-password'}
            className='bg-primaryGreen hover:bg-green-300 text-white px-5 py-2 flex items-center justify-center rounded'
          >
            Ok
          </Link>
        </div>
      </ModalDialog>
      <Footer />
    </>
  );
};

export default NewPassword;
