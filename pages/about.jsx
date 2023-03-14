import Meta from '../components/Meta';
import Link from 'next/link';
import { ImCheckmark } from 'react-icons/im';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Svg1 from '../components/Svg1';
import Svg2 from '../components/Svg2';
import TeamCard from '../components/TeamCard';
import { useRouter, withRouter } from 'next/router';
import Animation from '../components/Animation';
const About = () => {
  const router = useRouter().pathname;

  return (
    <>
      <Meta title='Prompay | About Us' />

      <div className='bg-primaryBlue bg-cover z-10 relative '>
        <Nav path={router} />
        <div className='in h-full flex flex-col items-center pb-[70px]'>
          <h1 className='font-[700] text-[40px] md:text-[80px] leading-10 mb-[55px] text-white md:mt-[62px] mt-[30px]'>
            About Us
          </h1>
          <Animation style='fade-right' placement='top-center'>
            <img src='/images/bg/about.jpg' alt='about us' className='' />
            {/* <TextAnimation time={0.1}> */}
            <p className=' mt-[25px] md:mt-[111px] text-[20px] md:text-[35px] font-[300] leading-10 text-white px-[20px]  md:px-[220px]'>
              Hey there! <br />
              <br />
              Have you heard of PromPay? It's an online platform that lets you
              earn money while you learn! At PromPay, everybody has the
              opportunity to earn and learn online. Our mainstay is financial
              stability and cognitive thinking—and with PromPay, you can get
              both! Our team is made up of passionate educators and technology
              enthusiasts who are committed to making learning accessible to
              all. <br /> <br /> We believe that education should be not only
              informative but also fun and rewarding, which is why we've
              designed our platform to be just that. Here is how it works: You
              take an exam, earn and learn. It is as simple as that! So, what do
              you say? Ready to start earning and learning with PromPay? Join us
              today and start your journey toward a brighter, smarter and
              financially stable future!
            </p>
            {/* </TextAnimation> */}
          </Animation>
        </div>
        <Animation style='flip-left' placement='center-center'>
          <section className='relative bg-[#8E24F8] py-[40px]'>
            <img
              src='/images/waveteam.png'
              alt=''
              className='z-10 left-[40px] absolute top-[-50px]'
            />
            <img
              src='/images/waveteam.png'
              alt=''
              className='z-10 absolute right-[40px] top-[-50px]'
            />
            <h3 className='text-[30px] md:text-[60px] font-[700 leading-10 text-white text-center'>
              Mission
            </h3>
            <div className='md:flex justify-evenly pl-[20px] md:pl-[180px] pr-[10px] md:pr-[85px] '>
              <div className='mt-[20px] w-4/5'>
                {/* <div className='hidden md:block'>
                  <Svg1 />
                </div> */}
                {/* <TextAnimation> */}
                {/* <img src="/images/Svg1.svg" alt="" /> */}
                <p className='fadeIn md:w-[379px] text-white text-[20px]font-[400]'>
                  Our mission is to let thousands of learners worldwide earn
                  while answering questions online and learn while they're at
                  it. It's a great way to not only expand your knowledge but
                  also earn some extra income.
                </p>
                {/* </TextAnimation> */}
              </div>
              <div className='md:relative md:top-[-50px] mt-[20px] md:mt-0'>
                {/* <div className='hidden md:block'>
                  <Svg2 />
                </div> */}
                {/* <TextAnimation> */}
                <p className='fadeIn md:w-[379px] text-white text-[20px]font-[400]'>
                  The more questions you answer, the more money you can earn.
                  It's a win-win situation - you learn and get paid for it. And
                  the best part? You can do it all from the comfort of your own
                  home. All you need is an internet connection.
                </p>
                {/* </TextAnimation> */}
              </div>
            </div>
          </section>
        </Animation>
        {/* <section className='relative px-[20px] md:px-[80px] pt-[25px] md:pt-[44px] pb-[20px]'>
          <img
            src='/images/waveteam.png'
            alt=''
            className='z-10 left-[40px] absolute top-[-30px]'
          />
          <img
            src='/images/waveteam.png'
            alt=''
            className='z-10 absolute right-[40px] top-[-30px]'
          />
          <h3 className='text-[30px] md:text-[60px] font-[700 leading-10 text-white text-center mb-[20px] md:mb-[36px]'>
            Our Team
          </h3>
          <div className='md:flex gap-x-[51px]'>
            <Animation style='zoom-in-right' placement='center-center'>
              <TeamCard
                image='images/team/ino1.png'
                name='Innokenty Isers'
                title='CEO, Founder'
              />
            </Animation>
            <Animation style='zoom-in-right' placement='center-center'>
              <TeamCard
                image='images/team/ino2.png'
                name='Innokenty Isers'
                title='CEO, Founder'
              />
            </Animation>
            <Animation style='zoom-in-right' placement='center-center'>
              <TeamCard
                image='images/team/ino3.png'
                name='Innokenty Isers'
                title='CEO, Founder'
              />
            </Animation>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
};

export default About;
