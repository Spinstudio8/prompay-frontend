import React, { useState, useEffect } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { userResetPassword } from '../../services/settingsService';
import { toast } from 'react-toastify';
import ButtonLoader from './../ButtonLoader';

const bgColor = 'bg-gray-100';

function ReportProblem({ token }) {
  const [state, setState] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setOpenMode] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);

  const handleOpen = () => {
    setOpenMode(!isOpen);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSave(true);
    setErrorMessage('');

    if (state.newPassword !== state.confirmPassword) {
      setErrorMessage('Passwords do not match');
      setLoadingSave(false);
      return;
    }

    const password = {
      currentPassword: state.currentPassword,
      newPassword: state.newPassword,
    };

    try {
      const { data } = await userResetPassword(password, token);
      toast(`${data.message}`, { className: 'toast-style' });
      setLoadingSave(false);
      setOpenMode(false);
      setState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
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
          isOpen ? bgColor : null
        }  text-black border border-gray-400 w-full rounded-sm px-[10px] shadow-sm py-[10px]`}
      >
        <div
          onClick={() => handleOpen()}
          className='w-full flex justify-between items-center cursor-pointer'
        >
          <div className='flex gap-4 items-center dark:text-white'>
            <div className='xs:text-[20px] xs:ml-[10px]'>
              <BsFillQuestionCircleFill />
            </div>
            <div>
              <h3>Report a problem</h3>
              <p className='text-[rgba(0,0,0,0.6)] hidden xs:block dark:text-[rgba(255,255,255,0.8)]'>
                Having issues with your account? You can open a ticket.
              </p>
            </div>
          </div>
          <div>
            {isOpen ? (
              <button className='text-[14px] font-semibold border border-gray-400 bg-gray-100 hover:bg-gray-200 rounded px-[10px]'>
                Close
              </button>
            ) : (
              <button className='text-[14px] font-semibold border border-gray-400 bg-gray-100 hover:bg-gray-200 rounded px-[10px]'>
                Open
              </button>
            )}
          </div>
        </div>
        {isOpen && (
          <div className='w-full flex flex-col items-center'>
            <div className='border-t border-gray-300 w-[90%] mx-auto my-[20px]'></div>
            <form onSubmit={handleSubmit}>
              <div className='mb-[30px]'>
                <label
                  htmlFor='currentPassword'
                  className='font-semibold mr-4 xs:w-[92px] block xs:inline-block xs:text-right'
                >
                  Current
                </label>
                <input
                  id='currentPassword'
                  type='password'
                  name='currentPassword'
                  value={state.currentPassword}
                  className='bg-light-gray border-black border rounded pl-2'
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='mb-[15px]'>
                <label
                  htmlFor='newPassword'
                  className='font-semibold mr-4 xs:w-[92px] block xs:inline-block xs:text-right'
                >
                  New
                </label>
                <input
                  id='newPassword'
                  type='password'
                  name='newPassword'
                  value={state.newPassword}
                  className='bg-light-gray border-black border rounded pl-2'
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className='mb-[15px]'>
                <label
                  htmlFor='confirmPassword'
                  className='font-semibold mr-4 xs:w-[92px] block xs:inline-block xs:text-right'
                >
                  Re-type new
                </label>
                <input
                  id='confirmPassword'
                  type='password'
                  name='confirmPassword'
                  value={state.confirmPassword}
                  className='bg-light-gray border-black border rounded pl-2'
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
                    Send
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default ReportProblem;
