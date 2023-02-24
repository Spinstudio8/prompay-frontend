import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { resendVerificationCode } from '../services/userService';
import ButtonLoader from '../components/ButtonLoader';
import { setVerificationEmail } from '../store/slice/userSlice';

const NotVerifiedPopup = ({
  notVerifiedPopupState,
  setNotVerifiedPopupState,
  email,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendVerificationCode = async () => {
    setLoadingVerify(true);
    setErrorMessage('');

    try {
      const { data } = await resendVerificationCode(email);
      dispatch(setVerificationEmail(email));
      router.replace('verify');
    } catch (err) {
      setLoadingVerify(false);
      if (err.response && err.response.data) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <>
      {notVerifiedPopupState && (
        <div className='bg-[rgba(0,0,0,0.6)] w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[2000]'>
          <div className='relative bg-white flex flex-col items-center justify-center py-[20px] px-[20px] sm:px-[40px] rounded-lg'>
            <div
              onClick={() => setNotVerifiedPopupState(!notVerifiedPopupState)}
              className='text-[16px] font-extrabold absolute right-[15px] top-[7px] cursor-pointer hover:text-black text-red-600'
            >
              X
            </div>
            <p className='font-bold mt-2 mb-4 text-[1.2rem] text-yellow-500'>
              Your account is not verified!
            </p>
            <p className='mb-2'>Click the button below to verify</p>
            {loadingVerify ? (
              <ButtonLoader />
            ) : (
              <button
                onClick={sendVerificationCode}
                className='hover:bg-primaryBlue  bg-primaryGreen text-white py-[16px] px-24px w-[90px] h-[45px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center flex justify-center items-center'
              >
                Verify
              </button>
            )}

            {errorMessage && (
              <p className='mt-2 text-red-600'>{errorMessage}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NotVerifiedPopup;
