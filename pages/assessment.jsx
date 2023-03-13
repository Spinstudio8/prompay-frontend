import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { startAssessment } from '../services/assessmentService';
import ButtonLoader from '../components/ButtonLoader';
import StartAssessment from '../components/StartAssessment';
import withLoginAuth from '../auth/withLoginAuth';

const assessment = () => {
  const { token } = useSelector((state) => state.user);
  const [isStart, setIsStart] = useState(false);
  const [currentAssessment, setCurrentAssessment] = useState({
    questions: [],
    startTime: 0,
    endTime: 0,
    nextAssessmentTime: 0,
  });
  const [loadingStart, setLoadingStart] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleStart = async () => {
    // console.log('start');
    setLoadingStart(true);
    setErrorMessage('');

    try {
      const { data } = await startAssessment(token);
      setCurrentAssessment(data);
      setIsStart(true);
      setLoadingStart(false);
      console.log(data);
    } catch (err) {
      setLoadingStart(false);
      if (err.response && err.response?.data) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <>
      <DashboardLayout>
        <div className='text-black'>
          <div className='pt-[90px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <h2 className='mt-8 md:mt-0 font-[500] text-[24px] leading-7'>
              Answer more to earn more
            </h2>

            {!isStart && !loadingStart && (
              <button
                onClick={handleStart}
                className='my-5 bg-primaryGreen hover:bg-black text-white px-5 py-2 flex items-center justify-center rounded'
              >
                Start Assessment
              </button>
            )}
            {!isStart && loadingStart && (
              <div className='my-5'>
                <ButtonLoader />
              </div>
            )}

            {errorMessage && (
              <p className='mt-8 text-red-600'>{errorMessage}</p>
            )}

            {isStart && (
              <StartAssessment
                assessment={currentAssessment}
                setIsStart={setIsStart}
              />
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default withLoginAuth(assessment);
