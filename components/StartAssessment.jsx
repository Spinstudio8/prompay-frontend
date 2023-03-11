import React, { useState, useEffect } from 'react';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { submitAssessment } from '../services/assessmentService';
import ButtonLoader from '../components/ButtonLoader';
import ModalDialog from './ModalDialog';
import SubmittingAssessmentLoader from './SubmittingAssessmentLoader';

const StartAssessment = ({ assessment }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state.user);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    description: '',
    options: ['', '', '', ''],
    subject: {
      title: '',
      _id: '',
    },
  });
  const [assessmentAnswer, setAssessmentAnswer] = useState([]);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [assessmentResult, setAssessmentResult] = useState({
    message: '',
    score: 0,
    totalQuestion: 0,
  });

  const [modalState, setModalState] = useState(false);

  const handlePrevNext = (button) => {
    if (button === 'prev') {
      const current =
        currentQuestionNumber > 0 ? currentQuestionNumber - 1 : 49;
      setCurrentQuestionNumber(current);
    }
    if (button === 'next') {
      const current =
        currentQuestionNumber < 49 ? currentQuestionNumber + 1 : 0;
      setCurrentQuestionNumber(current);
    }
    console.log(assessmentAnswer);
  };

  const handleChange = (e) => {
    let answerObj = assessmentAnswer.find(
      (item) => item.question == e.target.name
    );
    console.log(e.target.value);
    if (answerObj) {
      answerObj.answer = e.target.value;
      const newAssessmentAnswer = assessmentAnswer.filter(
        (item) => item.question != answerObj.question
      );
      newAssessmentAnswer.push(answerObj);
      setAssessmentAnswer(newAssessmentAnswer);

      return;
    }

    answerObj = {
      question: currentQuestion._id,
      subject: currentQuestion.subject._id,
      answer: e.target.value,
    };
    setAssessmentAnswer([...assessmentAnswer, answerObj]);
  };

  const handleSubmit = async () => {
    setLoadingSubmit(true);
    setErrorMessage('');

    let newAssessmentAnswer = [...assessmentAnswer];
    for (const question of assessment.questions) {
      const questionAnswered = newAssessmentAnswer.find(
        (item) => item.question == question._id
      );
      if (!questionAnswered) {
        newAssessmentAnswer.push({
          question: question._id,
          subject: question.subject._id,
          answer: 4,
        });
      }
    }

    try {
      const { data } = await submitAssessment(newAssessmentAnswer, token);
      setLoadingSubmit(false);
      setAssessmentResult(data);
      setModalState(true);
    } catch (err) {
      setLoadingSubmit(false);
      if (err.response && err.response?.data) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  const handleSubmitted = () => {
    router.replace('dashboard');
  };

  useEffect(() => {
    console.log(currentQuestionNumber);
    setCurrentQuestion(assessment.questions[currentQuestionNumber]);
  }, [currentQuestionNumber]);

  return (
    <>
      {loadingSubmit && <SubmittingAssessmentLoader />}
      <div className='mt-[25px] md:mt-[40px]'>
        <h3 className='font-[500] text-[20px] leading-7 mb-4'>
          {currentQuestion?.subject.title}:
        </h3>
        <div className='relative w-full'>
          {assessment.questions.map((item, index) => (
            <div
              key={item._id}
              className={`absolute top-0 left-0 right-0 ${
                index === currentQuestionNumber ? 'block' : 'hidden'
              }`}
            >
              <p className='font-[400] mb-1 text-[18px] leading-6'>
                Question {currentQuestionNumber + 1} of{' '}
                {assessment.questions.length}
              </p>
              <div className='w-[95%]'>
                <div className='w-full min-h-[84px] bg-[#060720] rounded-[8px] flex flex-col justify-center px-[15px] py-[15px] md:px-[50px] md:py-[20px]'>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.question,
                    }}
                    className=' text-[20px] text-white font-[500]text-white'
                  ></p>
                </div>
                <div
                  className='mt-[40px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
                  style={{
                    boxShadow:
                      '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <div className='flex mb-[20px] md:mb-[45px] items-center'>
                    <p className='font-[700] text-[16px]'>A</p>
                    <input
                      type='radio'
                      name={item._id}
                      id='optionA'
                      value={0}
                      onChange={handleChange}
                      className='ml-[11px]'
                    />{' '}
                    <label
                      htmlFor='optionA'
                      className='font-[400] text-[16px] leading-6 ml-[15px]'
                    >
                      {item.options[0]}
                    </label>
                  </div>
                  <div className='flex items-center mb-[20px] md:mb-[45px]'>
                    <p className='font-[700] text-[16px]'>B</p>
                    <input
                      type='radio'
                      name={item._id}
                      id='optionB'
                      value={1}
                      onChange={handleChange}
                      className='ml-[11px]'
                    />{' '}
                    <label
                      htmlFor='optionB'
                      className='font-[400] text-[16px] leading-6 ml-[15px]'
                    >
                      {item.options[1]}
                    </label>
                  </div>
                  <div className='flex items-center mb-[20px] md:mb-[45px]'>
                    <p className='font-[700] text-[16px]'>C</p>
                    <input
                      type='radio'
                      name={item._id}
                      id='optionC'
                      value={2}
                      onChange={handleChange}
                      className='ml-[11px]'
                    />{' '}
                    <label
                      htmlFor='optionC'
                      className='font-[400] text-[16px] leading-6 ml-[15px]'
                    >
                      {item.options[2]}
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <p className='font-[700] text-[16px]'>D</p>
                    <input
                      type='radio'
                      name={item._id}
                      id='optionD'
                      onChange={handleChange}
                      value={3}
                      className='ml-[11px]'
                    />{' '}
                    <label
                      htmlFor='optionD'
                      className='font-[400] text-[16px] leading-6 ml-[15px]'
                    >
                      {item.options[3]}
                    </label>
                  </div>
                </div>
              </div>
              <div className='flex gap-x-[35px] justify-center mb-[20px] md:mb-[100px]'>
                <button
                  onClick={() => handlePrevNext('prev')}
                  className='w-[150px] shadow border-2 px-5 py-3 flex items-center justify-center rounded'
                >
                  <RxDoubleArrowLeft />
                  <span className='ml-[10px]'>Previous</span>
                </button>
                <button
                  onClick={() => handlePrevNext('next')}
                  className='w-[150px] shadow border-2 px-5 py-3 flex items-center justify-center rounded'
                >
                  <span className='mr-[10px]'>Next</span> <RxDoubleArrowRight />
                </button>
              </div>
              <div className='flex justify-center md:justify-end pb-[20px]'>
                <button
                  onClick={handleSubmit}
                  className='w-[150px] bg-primaryGreen text-white px-5 py-3 flex items-center justify-center rounded'
                >
                  Submit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalDialog showModal={modalState}>
        <h1 className='mb-4 font-bold'>ASSESSMENT</h1>
        <div className='w-full flex flex-col items-center'>
          <p>{assessmentResult.message}</p>
          <p className='mt-2'>
            <span className='text-primaryGreen'>Your score:</span>{' '}
            {assessmentResult.score}/{assessmentResult.totalQuestion}
          </p>
          <button
            onClick={() => handleSubmitted()}
            className='my-6 bg-primaryGreen hover:bg-black text-white px-2 py-1 flex items-center justify-center rounded'
          >
            Ok
          </button>
        </div>
      </ModalDialog>
    </>
  );
};

export default StartAssessment;
