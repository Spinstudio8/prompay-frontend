import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { withdraw } from '../services/withdrawalService';
import ButtonLoader from './ButtonLoader';
import ModalDialog from './ModalDialog';

const WithdrawModal = ({ showModal, setModalState }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state.user);
  const [state, setState] = useState({
    type: '',
    bankName: '',
    accountNumber: '',
    accountName: '',
    amount: 0,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setErrorMessage('');
    console.log(state);

    try {
      const { data } = await withdraw(state, token);
      setLoadingSubmit(false);
      setModalState(false);
      setSubmitted(true);
    } catch (err) {
      if (err.response && err.response?.data) {
        setErrorMessage(err.response.data.message);
      }
      setLoadingSubmit(false);
    }
  };

  const handleSubmitted = () => {
    router.replace('dashboard');
  };
  return (
    <>
      {showModal && (
        <div className='bg-[rgba(0,0,0,0.8)] w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-[2000]'>
          <div className='w-[90%] sm:w-[60%] lg:w-[40%] bg-white rounded-lg px-6 py-8 flex flex-col items-center'>
            <h2 className='font-[500] text-[24px] leading-7 mb-10'>
              Withdraw from your account
            </h2>
            {errorMessage && (
              <p className='text-red-600 text-[14px] mb-2'>{errorMessage}</p>
            )}
            <div className='w-full'>
              <form onSubmit={handleSubmit} className='w-full'>
                <div className='w-full mb-2'>
                  <label htmlFor='type' className='block font-semibold'>
                    Withdraw to
                  </label>
                  <select
                    name='type'
                    id='type'
                    value={state.type}
                    className='w-full py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded'
                    onChange={handleChange}
                  >
                    <option value=''>Select withdrawal type</option>
                    <option value='bank'>Bank</option>
                    <option value='cryptocurrency'>Cryptocurrency</option>
                  </select>
                </div>
                <div className='w-full mb-2'>
                  <label htmlFor='bankName' className='block font-semibold'>
                    Bank Name
                  </label>
                  <input
                    type='text'
                    id='bankName'
                    name='bankName'
                    value={state.bankName}
                    onChange={handleChange}
                    className='w-full py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded'
                  />
                </div>
                <div className='w-full mb-2'>
                  <label
                    htmlFor='accountNumber'
                    className='block font-semibold'
                  >
                    Account Number
                  </label>
                  <input
                    type='number'
                    id='accountNumber'
                    name='accountNumber'
                    value={state.accountNumber}
                    onChange={handleChange}
                    className='w-full py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded no-arrows'
                  />
                </div>
                <div className='w-full mb-2'>
                  <label htmlFor='accountName' className='block font-semibold'>
                    Account Name
                  </label>
                  <input
                    type='text'
                    id='accountName'
                    name='accountName'
                    value={state.accountName}
                    onChange={handleChange}
                    className='w-full py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded'
                  />
                </div>
                <div className='w-full mb-2'>
                  <label htmlFor='Amount' className='block font-semibold'>
                    Amount
                  </label>
                  <input
                    type='number'
                    id='amount'
                    name='amount'
                    value={state.amount}
                    onChange={handleChange}
                    className='w-full py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded no-arrows'
                  />
                </div>
                <div className='flex gap-8 w-full justify-center mt-6'>
                  {loadingSubmit ? (
                    <ButtonLoader />
                  ) : (
                    <>
                      <button
                        onClick={() => setModalState(!showModal)}
                        className=' bg-primaryGreen hover:bg-black text-white px-5 py-2 flex items-center justify-center rounded'
                      >
                        Cancel
                      </button>
                      <button
                        type='submit'
                        className=' bg-primaryGreen hover:bg-black text-white px-5 py-2 flex items-center justify-center rounded'
                      >
                        Withdraw
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <ModalDialog showModal={submitted}>
        <h1 className='mb-4 font-bold'>WITHDRAWAL</h1>
        <div className='w-full flex flex-col items-center'>
          <p>Your withdrawal request has been submitted</p>
          <button
            onClick={() => handleSubmitted()}
            className='my-6 bg-primaryGreen hover:bg-black text-white px-5 py-2 flex items-center justify-center rounded'
          >
            Ok
          </button>
        </div>
      </ModalDialog>
    </>
  );
};

export default WithdrawModal;
