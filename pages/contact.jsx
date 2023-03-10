import { useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { SlEarphonesAlt } from 'react-icons/sl';
import { FaPhoneAlt } from 'react-icons/fa';
import Nav from '../components/Nav';
import Meta from '../components/Meta';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Animation from '../components/Animation';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Verified = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const router = useRouter().pathname;
  return (
    <>
      <Meta title='Prompay | Contact' />

      <div
        data-aos='fade-up'
        className='bg-primaryBlue bg-cover z-10 relative text-white '
      >
        <Nav path={router} />
        <h1 className='font-[700] text-[30px] md:text-[80px] leading-10 text-center mt-[28px] md:mt-[39px] mb-[30px] md:mb-[95px]'>
          Contacts
        </h1>
        {/* <Animation style="flip-left" placement="center-center"> */}
        <div className='pl-[20px] md:pl-[83px]'>
          <div className='flex items-center '>
            <AiOutlineMail size='27' />
            <p className='font-[500] text-[20px] md:text-[43px] leading-7 ml-[20px] md:ml-[45px]'>
              support@prompay.com
            </p>
          </div>
          <div className='flex items-center my-[16px] md:my-[24px]'>
            <SlEarphonesAlt className='h-[35px] md:h-[50px]' size={27} />
            <p className='font-[500] text-[20px] md:text-[43px] leading-7 ml-[20px] md:ml-[45px]'>
              live chat
            </p>
          </div>
          <div className='flex items-center '>
            <FaPhoneAlt className='h-[35px] md:h-[50px]' size={27} />
            <p className='font-[500] text-[20px] md:text-[43px] leading-7 ml-[20px] md:ml-[45px]'>
              +234 912 150 4220
            </p>
          </div>
        </div>
        <div className='md:flex md:gap-x-[266px] mt-[50px] md:mt-[165px] pl-[20px] md:pl-[83px]'>
          <div className=''>
            <div className='mb-[20px] md:mb-[50px]'>
              <p className='font-[400] text-[20px] leading-5'>Business offer</p>
              <p className='font-[400] text-[20px] leading-5'>
                business@paybis.com
              </p>
            </div>
            <div className='mb-[20px] md:mb-[50px]'>
              <p className='font-[400] text-[20px] leading-5'>
                Bug Bounty program / security
              </p>
              <p className='font-[400] text-[20px] leading-5'>
                security@paybis.com
              </p>
            </div>
            <div className='mb-[20px] md:mb-[50px]'>
              <p className='font-[400] text-[20px] leading-5'>
                Blog related matters
              </p>
              <p className='font-[400] text-[20px] leading-5'>
                blog@paybis.com
              </p>
            </div>
          </div>
          <div className=''>
            <div className='mb-[20px] md:mb-[50px]'>
              <p className='font-[400] text-[20px] leading-5'>
                Referral program inquiries
              </p>
              <p className='font-[400] text-[20px] leading-5'>
                webmaster@paybis.com
              </p>
            </div>
            <div className=''>
              <p className='font-[400] text-[20px] leading-5'>
                Referral program inquiries
              </p>
              <p className='font-[400] text-[20px] leading-5'>
                webmaster@paybis.com
              </p>
            </div>
          </div>
        </div>
        {/* </Animation> */}
      </div>
      <Footer />
    </>
  );
};

export default Verified;
