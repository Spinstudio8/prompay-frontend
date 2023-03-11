import React, { useState, useEffect } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import ButtonLoader from './../ButtonLoader';
import { sendProblemReport } from '../../services/supportService';

const bgColor = 'bg-gray-100';

function ReportProblem({ token }) {
  const [state, setState] = useState({
    area: '',
    details: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isOpen, setOpenMode] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);

  const handleOpen = () => {
    setOpenMode(!isOpen);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSend(true);
    setErrorMessage('');

    const reportData = {
      area: state.area,
      details: state.details,
    };

    try {
      const { data } = await sendProblemReport(reportData, token);
      toast(`${data.message}`, { className: 'toast-style' });
      setLoadingSend(false);
      setOpenMode(false);
      setState({
        area: '',
        details: '',
      });
    } catch (err) {
      if (err.response && err.response?.data) {
        setErrorMessage(err.response.data.message);
      }
      setLoadingSend(false);
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
            <form
              onSubmit={handleSubmit}
              className='xxs:w-[90%] xs:w-[60%] md:w-[450px]'
            >
              <div className='mb-[20px] w-full'>
                <label htmlFor='area' className='font-semibold block mb-2'>
                  How can we help?
                </label>
                <select
                  id='area'
                  name='area'
                  value={state.area}
                  className='bg-light-gray border-black border rounded pl-2 py-2 w-full'
                  onChange={(e) => handleChange(e)}
                >
                  <option>Choose an area</option>
                  <option value='Ads'>Ads</option>
                  <option value='Assessment'>Assessment</option>
                  <option value='Questions'>Questions</option>
                  <option value='Profile'>Profile</option>
                  <option value='Settings'>Settings</option>
                  <option value='Rewards'>Rewards</option>
                  <option value='Withdrawal'>Withdrawal</option>
                  <option value='Wallet balance'>Wallet balance</option>
                  <option value='Navigation'>Navigation</option>
                  <option value='Login'>Log in</option>
                  <option value='User interface'>User interface</option>
                  <option value='Other'>Other</option>
                </select>
              </div>
              <div className='mb-[20px] w-full'>
                <label htmlFor='details' className='font-semibold block mb-2'>
                  Details
                </label>
                <textarea
                  id='details'
                  name='details'
                  value={state.details}
                  placeholder='Please include as much info as possible...'
                  className='bg-light-gray border-black border rounded py-1 pl-2 w-full h-[130px] resize-none focus:border-none'
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
              <div className='w-full rounded-lg bg-gray-300 px-4 py-2 text-[14px]'>
                <p>
                  Let us know if you have ideas that can help make our products
                  better.
                </p>
                <p className=''>
                  Note: Do not send ticket twice. Send once and we will respond
                  in 3 working days.
                </p>
              </div>
              <div className='text-center'>
                {errorMessage && (
                  <p className='text-red-600 text-[14px] md:w-[70%]'>
                    {errorMessage}
                  </p>
                )}
                {loadingSend ? (
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
