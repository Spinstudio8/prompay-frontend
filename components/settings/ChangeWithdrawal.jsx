import React, { useState, useEffect } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import { userResetPassword } from '../../services/settingsService';
import { toast } from 'react-toastify';
import ButtonLoader from './../ButtonLoader';

const bgColor = 'bg-gray-100';

function ChangeWithdrawal({ token }) {
  const [state, setState] = useState({
    minWithdrawal: '',
    maxWithdrawal: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isEdit, setEditMode] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);

  const handleEdit = () => {
    setEditMode(!isEdit);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSave(true);
    setErrorMessage('');

    const withdrawalLimits = {
      minWithdrawal: state.minWithdrawal,
      maxWithdrawal: state.maxWithdrawal,
    };

    try {
      const { data } = await userResetPassword(withdrawalLimits, token);
      toast(`${data.message}`, { className: 'toast-style' });
      setLoadingSave(false);
      setEditMode(false);
      setState({
        minWithdrawal: '',
        maxWithdrawal: '',
      });
    } catch (err) {
      console.log(err);
      if (err.response && err.response?.data) {
        setErrorMessage(err.response.data.message);
      }
      setLoadingSave(false);
    }
  };

  return (
    <>
      <div
        className={`${
          isEdit ? bgColor : null
        }  text-black border border-gray-400 w-full rounded-sm px-[10px] shadow-sm py-[10px]`}
      >
        <div
          onClick={() => handleEdit()}
          className='w-full flex justify-between items-center cursor-pointer'
        >
          <div className='flex gap-4 items-center dark:text-white'>
            <div className='xs:text-[20px] xs:ml-[10px]'>
              <TbCurrencyNaira />
            </div>
            <div>
              <h3>Change Withdrawal Limit</h3>
              <p className='text-[rgba(0,0,0,0.6)] hidden xs:block dark:text-[rgba(255,255,255,0.8)]'>
                Set the minimum and maximum withdrawable amount
              </p>
            </div>
          </div>
          <div>
            {isEdit ? (
              <button className='text-[14px] font-semibold border border-gray-400 bg-gray-100 hover:bg-gray-200 rounded px-[10px]'>
                Close
              </button>
            ) : (
              <button className='text-[14px] font-semibold border border-gray-400 bg-gray-100 hover:bg-gray-200 rounded px-[10px]'>
                Edit
              </button>
            )}
          </div>
        </div>
        {isEdit && (
          <div className='w-full flex flex-col items-center'>
            <div className='border-t border-gray-300 w-[90%] mx-auto my-[20px]'></div>
            <div className='w-full flex flex-col sm:flex-row justify-center gap-6 sm:gap-10'>
              <div className='order-[1] sm:order-[0]'>
                <form onSubmit={handleSubmit}>
                  <div className='mb-[15px]'>
                    <label
                      htmlFor='minWithdrawal'
                      className='font-semibold mr-4 xs:w-[92px] block xs:inline-block xs:text-right'
                    >
                      Minimum
                    </label>
                    <input
                      id='minWithdrawal'
                      type='number'
                      name='minWithdrawal'
                      value={state.minWithdrawal}
                      className='bg-light-gray border-black border rounded pl-2 no-arrows'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className='mb-[15px]'>
                    <label
                      htmlFor='maxWithdrawal'
                      className='font-semibold mr-4 xs:w-[92px] block xs:inline-block xs:text-right'
                    >
                      Maximum
                    </label>
                    <input
                      id='maxWithdrawal'
                      type='number'
                      name='maxWithdrawal'
                      value={state.maxWithdrawal}
                      className='bg-light-gray border-black border rounded pl-2 no-arrows'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className='text-center'>
                    {errorMessage && (
                      <p className='text-red-600 text-[14px] md:w-[70%]'>
                        {errorMessage}
                      </p>
                    )}
                    {loadingSave ? (
                      <span className='inline-block'>
                        <ButtonLoader />
                      </span>
                    ) : (
                      <button
                        type='submit'
                        className='bg-primaryGreen text-white px-3 py-1 mt-4 rounded-lg hover:bg-primaryBlue font-semibold cursor-pointer w-max h-max'
                      >
                        Save changes
                      </button>
                    )}
                  </div>
                </form>
              </div>
              <div>
                <h4>Current limits:</h4>
                <p>
                  Minimum - <span className='font-semibold'>₦ 2000</span>
                </p>
                <p>
                  Maximum - <span className='font-semibold'>₦ 100000</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChangeWithdrawal;
