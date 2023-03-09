import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useRouter } from 'next/router';
import Meta from '../components/Meta';
import ButtonLoader from '../components/ButtonLoader';
import { resetPassword } from '../services/userService';
import ModalDialog from '../components/ModalDialog';

const ResetPassword = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setErrorMessage('');

    try {
      const { data } = await resetPassword(email);
      setModalMessage(data.message);
      setShowModal(true);
    } catch (err) {
      if (err.response && err.response?.data) {
        setErrorMessage(err.response.data.message);
      }
      setLoadingSubmit(false);
    }
  };

  const navbar = router.pathname;
  return (
    <>
      <Meta title='Prompay | Password Reset' />

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
            <h3 className='font-[700] text-[24px]'>Password Reset</h3>
            <p className='font-[300] text-[15px] leading-4 my-[14px] text-center'>
              Having trouble signing in? Provide email to reset password.
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
                  htmlFor='email'
                  className='font-[300] text-[15px] leading-8 block text-[#979292]'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    Reset Password
                  </button>
                )}
              </div>
            </form>
          </div>
          {/* </Animation> */}
        </div>
      </div>
      <ModalDialog showModal={showModal}>
        <h1 className='mb-4 font-bold'>PASSWORD RESET</h1>
        <div className='w-full flex flex-col items-center'>
          <p>{modalMessage}</p>
        </div>
        <div className='flex gap-6 my-6'>
          <Link
            href={'/'}
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

export default ResetPassword;
