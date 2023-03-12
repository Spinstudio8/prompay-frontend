import { useEffect } from 'react';
import Link from 'next/link';
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
        <h1 className='font-[700] text-[30px] md:text-[80px] leading-10 text-center mt-[28px] md:mt-[60px] mb-[30px] md:mb-[95px]'>
          Contacts
        </h1>
        {/* <Animation style="flip-left" placement="center-center"> */}
        <div className='pl-[20px] md:pl-[83px]'>
          <div className='flex items-center '>
            <AiOutlineMail size='27' />
            <p className='font-[500] text-[14px] md:text-[43px] leading-7 ml-[20px] md:ml-[45px]'>
              <Link href={'mailto: support@theprompay.com'}>
                support@theprompay.com
              </Link>
            </p>
          </div>
          <div className='flex items-center my-[14px] md:my-[24px]'>
            <SlEarphonesAlt className='h-[35px] md:h-[50px]' size={27} />
            <p className='font-[500] text-[16px] md:text-[43px] leading-7 ml-[20px] md:ml-[45px]'>
              <Link href={'mailto: info@theprompay.com'}>
                info@theprompay.com
              </Link>
            </p>
          </div>
          <div className='flex items-center '>
            <FaPhoneAlt className='h-[35px] md:h-[50px]' size={27} />
            <p className='font-[500] text-[14px] md:text-[43px] leading-7 ml-[20px] md:ml-[45px]'>
              <Link href={'tel: +234 912 150 4220'}>+234 912 150 4220</Link>
            </p>
          </div>
        </div>
        <div className='md:flex md:gap-x-[266px] mt-[50px] md:mt-[165px] pl-[20px] md:pl-[83px]'>
          <div className=''>
            <div className='pb-[20px] md:pb-[50px]'>
              <p className='font-[400] text-[20px] leading-5 mb-4'>
                Business offer
              </p>
              <p className='font-[400] text-[20px] leading-5'>
                <Link href={'mailto: business@theprompay.com'}>
                  business@theprompay.com
                </Link>
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
