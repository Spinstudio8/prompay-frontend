import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Link from 'next/link';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import Animation from '../components/Animation';
import { useRouter, withRouter } from 'next/router';
import MobileComingSoon from './../components/MobileComingSoon';
import { FaHandPointRight } from 'react-icons/fa';
import FaqComponent from '../components/FaqComponent';

export default function Faq() {
  const token = useSelector((state) => state.user.token);
  const router = useRouter().pathname;

  return (
    <>
      <Meta title='Prompay | FAQ' />
      {/* <Animation style="flip-left" placement="center-center"> */}
      <div className="relative bg-[url('/images/bg/faq.jpg')] h-[100vh] md:h-[160vh] bg-cover bg-center">
        <div
          className='absolute top-0 left-0 right-0 bottom-0 min-h-[100vh] z-[1]'
          style={{
            background:
              'linear-gradient(84.59deg, rgba(0, 0, 0, 0.58) 17.84%, rgba(0, 0, 0, 0.17) 52.14%, rgba(0, 0, 0, 0.65) 80.9%)',
          }}
        />
        <Nav path={router} />
        <div className='flex flex-col items-center md:items-end justify-center relative text-white z-10 md:pr-[27px] text-center h-[65%]'>
          <div className='w-full md:w-[538px] md:mt-[0px] md:mr-[100px]'>
            <h1 className='text-white text-[40px] md:text-[100px] font-[700] leading-[50px] md:leading-[100px] '>
              Frequently Asked Questions
            </h1>
            <p className='text-[20px] md:text-[29px] leading-6 md:leading-10 my-[20px]  '>
              Get answers to all your questions with our comprehensive FAQ.
            </p>
          </div>
        </div>
      </div>
      <Animation style='fade-left' placement='center-center'>
        <section className='bg-white py-[50px] md:py-[112px] px-[15px] text-black'>
          <h1 className='font-[700] text-[30px] md:text-[80px] leading-[30px] md:leading-[80px] mb-[24px] text-center '>
            FAQs
          </h1>
          <div className='mx-[10px] sm:w-[80%] md:w-[70%] sm:mx-auto'>
            <FaqComponent question={'What is promPay?'}>
              <p>
                Prompay is an online platform that tests your ability to answer
                questions and earn while learning. We make learning fun,
                challenging, and rewarding for you. Tackle a series of questions
                and earn money if you answer correctly.
              </p>
            </FaqComponent>
            <FaqComponent question={'How does it work?'}>
              <p>
                Simply visit prompay.com and sign up. Fill in the required
                details and set up your profile. Take assessments and start
                earning.
              </p>
            </FaqComponent>
            <FaqComponent question={'Who can join?'}>
              <p>
                PromPay is open to everyone. All you need is a good internet
                connection.
              </p>
            </FaqComponent>
            <FaqComponent
              question={'Do I have to pay a fee during registration?'}
            >
              <p>No, promPay will never request any payment or fee from you.</p>
            </FaqComponent>
            <FaqComponent question={'How do I earn on promPay?'}>
              <p>
                It is easy! All you have to do is log in to your account and
                take assessments. The more questions you answer correctly, the
                better your earnings.{' '}
              </p>
            </FaqComponent>
            <FaqComponent question={'What are the assessment about?'}>
              <p>
                The questions for each assessment covers subjects such as
                Biology, English, Qualitative Reasoning, Football, Current
                Affairs, and Commerce. The level of difficulty progresses as
                more questions are answered.
              </p>
            </FaqComponent>
            <FaqComponent
              question={'How often can I make a withdrawal request?'}
            >
              <p>You can make a withdrawal request every two weeks</p>
            </FaqComponent>
            <FaqComponent
              question={'How long does it take to process my earnings?'}
            >
              <p>
                Your withdrawal request will be processed within a few minutes,
                and your earnings will be deposited in your local bank account
                in less than 24 hours.
              </p>
            </FaqComponent>
            <FaqComponent
              question={
                'I have made a withdrawal request and haven’t received payment?'
              }
            >
              <p>
                Please contact support to investigate if your withdrawal is
                still processing after 72 hours. Banks and local providers have
                different timeframes for processing payments or may require
                additional information.
              </p>
            </FaqComponent>
            <FaqComponent
              question={
                'Is there a minimum balance required before the withdrawal?'
              }
            >
              <p>
                There is no specific minimum balance for now, as it can vary
                from time to time.
              </p>
            </FaqComponent>
            <FaqComponent question={'How many questions per assessment?'}>
              <p>It can vary from time to time.</p>
            </FaqComponent>
          </div>
        </section>
      </Animation>
      <Animation style='fade-down-right' placement='center-center'>
        <MobileComingSoon />
      </Animation>
      <Footer />
    </>
  );
}
