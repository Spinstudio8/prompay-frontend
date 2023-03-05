import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  getWithdrawalById,
  processWithdrawal,
} from '../../services/withdrawalService';
import ButtonLoader from './../../components/ButtonLoader';
import ModalDialog from '../../components/ModalDialog';

const pendingStyle =
  'uppercase py-2 px-2 mb-4 bg-primaryBlue text-white font-semibold text-center';
const successfulStyle =
  'uppercase py-2 px-2 mb-4 bg-primaryGreen text-white font-semibold text-center';

export async function getServerSideProps(context) {
  const { id } = context.query;

  return {
    props: { id },
  };
}

const WithdrawalRequest = ({ id }) => {
  // const router = useRouter();
  const { token } = useSelector((state) => state.user);
  const [withdrawal, setWithdrawal] = useState({});
  const [loadingWithdrawal, setLoadingWithdrawal] = useState(true);

  const [loadingProcess, setLoadingProcess] = useState(false);
  const [toggleConfirmDialog, setToggleConfirmDialog] = useState(false);
  const [toggleResponseDialog, setToggleResponseDialog] = useState(false);
  const [message, setMessage] = useState('');

  const [userProfile, setUserProfile] = useState({});

  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const getWithdrawal = async () => {
      try {
        const { data } = await getWithdrawalById(id, token);
        console.log(data);
        setWithdrawal(data);
        setUserProfile(data.user);
        setLoadingWithdrawal(false);
        setRefetch(false);
      } catch (error) {
        setLoadingWithdrawal(true);
        setRefetch(false);
      }
    };

    getWithdrawal();
  }, [refetch]);

  const handleProcess = async (action) => {
    setLoadingProcess(true);

    try {
      const { data } = await processWithdrawal(withdrawal._id, action, token);
      setMessage(data.message);
      setLoadingProcess(false);
      setToggleConfirmDialog(false);
      setToggleResponseDialog(true);
    } catch (error) {
      setToggleConfirmDialog(false);
      setLoadingProcess(false);
      setToggleResponseDialog(true);

      if (error.response && error.response?.data) {
        setMessage(error.response.data.message);
      }
    }
  };

  const handleResponse = () => {
    setToggleResponseDialog(!toggleResponseDialog);
    setRefetch(!refetch);
  };

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  '>
          <div className='pt-[110px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <div className='flex justify-between mb-[20px] md:mb-[49px]'>
              <h2 className='font-[500] text-[24px] leading-7'>
                Process Withdrawal Request
              </h2>
            </div>
            <div
              className='mt-[10px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[30px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
              style={{
                boxShadow:
                  '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {loadingWithdrawal ? (
                <div className='w-full h-full flex justify-center items-center'>
                  <ButtonLoader />
                </div>
              ) : (
                <div>
                  <h2 className='xxs:text[1rem] xs:text-[1.3rem] text-primaryGreen font-semibold mb-2'>
                    Reference - <span className=''>{withdrawal?._id}</span>
                  </h2>
                  <div className='flex flex-col gap-6 md:flex-row justify-between items-start'>
                    <div>
                      <p>
                        <span>Withdrawal type - </span>{' '}
                        <span className='capitalize text-primaryGreen'>
                          {withdrawal?.type}
                        </span>
                      </p>
                      <p>
                        <span>Beneficiary bank name - </span>{' '}
                        <span className='capitalize text-primaryGreen'>
                          {withdrawal?.bankName}
                        </span>
                      </p>
                      <p>
                        <span>Beneficiary account number - </span>{' '}
                        <span className='font-semibold text-primaryGreen'>
                          {withdrawal?.accountNumber}
                        </span>
                      </p>
                      <p>
                        <span>Beneficiary account name - </span>{' '}
                        <span className='font-semibold text-primaryGreen'>
                          {withdrawal?.accountName}
                        </span>
                      </p>
                      <p>
                        <span>Transaction id - </span>{' '}
                        <span className='text-primaryGreen'>
                          {withdrawal?.transaction}
                        </span>
                      </p>
                      <p>
                        <span>Date - </span>{' '}
                        <span className='text-primaryGreen'>
                          {new Date(withdrawal?.createdAt).toDateString()}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className='text-[1.2rem] font-semibold my-2'>
                        ₦ {withdrawal?.amount}
                      </p>
                      <div
                        className={
                          withdrawal.status === 'successful'
                            ? successfulStyle
                            : pendingStyle
                        }
                      >
                        {withdrawal?.status}
                      </div>
                      {withdrawal.status === 'pending' ? (
                        <div
                          onClick={() =>
                            setToggleConfirmDialog(!toggleConfirmDialog)
                          }
                          className='uppercase py-2 px-4 bg-primaryGreen text-white font-semibold rounded-lg cursor-pointer hover:bg-green-300 text-center'
                        >
                          Process
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className='w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
              style={{
                boxShadow:
                  '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {loadingWithdrawal ? (
                <div className='w-full h-full flex justify-center items-center'>
                  <ButtonLoader />
                </div>
              ) : (
                <div>
                  <h2 className='xxs:text[1rem] xs:text-[1.3rem] text-primaryGreen text-center font-semibold mb-6'>
                    User Profile
                  </h2>
                  <div className='flex flex-col gap-6 sm:gap-10 sm:flex-row justify-center items-center'>
                    <div className='w-[150px] h-[150px]'>
                      <img
                        src='/images/team/ino2.png'
                        alt='Profile picture'
                        className='rounded-[50%] w-full h-full'
                      />
                    </div>
                    <div>
                      <p className='font-semibold'>{`${userProfile.firstName} ${userProfile.lastName}`}</p>
                      <p>{userProfile.email}</p>
                      <p>{userProfile.phone}</p>
                      <p>{userProfile.location}</p>
                      <div className='mt-4'>
                        <p>
                          <span>Total score - </span>{' '}
                          <span className='font-semibold'>
                            {userProfile.totalScore}
                          </span>
                        </p>
                        <p>
                          <span>Wallet balance - </span>{' '}
                          <span className='font-semibold'>
                            ₦ {userProfile.wallet}
                          </span>
                        </p>
                        <p>
                          <span>Joined - </span>{' '}
                          <span className=''>
                            {new Date(userProfile.createdAt).toDateString()}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <ModalDialog showModal={toggleConfirmDialog}>
          <h1 className='mb-4 font-bold'>PROCESS WITHDRAWAL</h1>
          <div className='w-full flex flex-col items-center'>
            <p className='text-left w-full'>
              Are you sure you have sent ₦{' '}
              <span className='font-semibold'>{withdrawal?.amount}</span> to the
              beneficiary account?
            </p>
            <p className='text-left w-full mt-2'>
              If yes click confirm otherwise click cancel.
            </p>
            <div className='flex gap-6 my-6'>
              {loadingProcess ? (
                <ButtonLoader />
              ) : (
                <>
                  <button
                    onClick={() => setToggleConfirmDialog(!toggleConfirmDialog)}
                    className='bg-black hover:bg-primaryBlue text-white px-5 py-2 flex items-center justify-center rounded'
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleProcess('successful')}
                    className='bg-primaryGreen hover:bg-green-300 text-white px-5 py-2 flex items-center justify-center rounded'
                  >
                    Confirm
                  </button>
                </>
              )}
            </div>
          </div>
        </ModalDialog>
        <ModalDialog showModal={toggleResponseDialog}>
          <h1 className='mb-4 font-bold'>PROCESS WITHDRAWAL</h1>
          <div className='w-full flex flex-col items-center'>
            <p className=''>{message}</p>
            <button
              onClick={() => handleResponse()}
              className='my-6 bg-primaryGreen hover:bg-black text-white px-5 py-2 flex items-center justify-center rounded'
            >
              OK
            </button>
          </div>
        </ModalDialog>
      </DashboardLayout>
    </>
  );
};

export default WithdrawalRequest;
