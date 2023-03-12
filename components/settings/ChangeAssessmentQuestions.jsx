import React, { useState, useEffect } from 'react';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { savePlatformSettings } from '../../services/settingsService';
import { toast } from 'react-toastify';
import ButtonLoader from './../ButtonLoader';

const bgColor = 'bg-gray-100';

function ChangeAssessmentQuestions({ token, settings, getSettings }) {
  const [state, setState] = useState({
    totalQuestions: '',
    pricePerQuestion: '',
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

    const questionData = {
      totalQuestions: state.totalQuestions,
      pricePerQuestion: state.pricePerQuestion,
    };

    try {
      const { data } = await savePlatformSettings(
        settings._id,
        questionData,
        token
      );
      toast(`${data.message}`, { className: 'toast-style' });
      setLoadingSave(false);
      setEditMode(false);
      setState({
        totalQuestions: '',
        pricePerQuestion: '',
      });
      getSettings();
    } catch (err) {
      if (err.response && err.response?.data) {
        setErrorMessage(err.response.data.message);
      }
      setLoadingSave(false);
    }
  };

  useEffect(() => {
    setState(settings.data);
  }, []);

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
              <BsFillQuestionSquareFill />
            </div>
            <div>
              <h3>Assessment Question</h3>
              <p className='text-[rgba(0,0,0,0.6)] hidden xs:block dark:text-[rgba(255,255,255,0.8)]'>
                Set the total questions and price per question
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
                      htmlFor='totalQuestions'
                      className='font-semibold mr-4 xs:w-[150px] block xs:inline-block xs:text-right'
                    >
                      Total questions
                    </label>
                    <input
                      id='totalQuestions'
                      type='number'
                      name='totalQuestions'
                      value={state.totalQuestions}
                      className='bg-light-gray border-black border rounded pl-2 no-arrows'
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className='mb-[15px]'>
                    <label
                      htmlFor='maxWithdrawal'
                      className='font-semibold mr-4 xs:w-[150px] block xs:inline-block xs:text-right'
                    >
                      Price per question
                    </label>
                    <input
                      id='pricePerQuestion'
                      type='number'
                      name='pricePerQuestion'
                      value={state.pricePerQuestion}
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
                <h4>Current values:</h4>
                <p>
                  Questions -{' '}
                  <span className='font-semibold'>
                    {settings.data.totalQuestions}
                  </span>
                </p>
                <p>
                  Price per question -{' '}
                  <span className='font-semibold'>
                    ₦ {settings.data.pricePerQuestion}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChangeAssessmentQuestions;
