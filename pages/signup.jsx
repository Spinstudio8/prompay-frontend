import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useRouter, withRouter } from 'next/router';
import Meta from '../components/Meta';
import ButtonLoader from '../components/ButtonLoader';
import { signup } from '../services/userService';
import { setVerificationEmail } from '../store/slice/userSlice';
import withLogoutAuth from '../auth/withLogoutAuth';

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const navbar = router.pathname;

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    birthDay: '',
    gender: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
  });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const handleChange = (evt) => {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingSubmit(true);

    if (state.password !== state.confirmPassword) {
      setErrorMessage('Password does not match');
      setIsError(true);
      setLoadingSubmit(false);
      return;
    } else {
      setErrorMessage('');
      setIsError(false);
    }

    const formData = {
      firstName: state.firstName,
      lastName: state.lastName,
      birthDay: state.birthDay,
      gender: state.gender,
      email: state.email,
      phone: state.phone,
      location: state.location,
      password: state.password,
      confirmPassword: state.confirmPassword,
    };

    let createUser = async () => {
      try {
        const { data } = await signup(formData);
        setIsError(false);
        dispatch(setVerificationEmail(state.email));
        router.replace('verify');
      } catch (err) {
        setIsError(true);
        if (err.response && err.response?.data) {
          setErrorMessage(err.response.data.message);
        }
        setLoadingSubmit(false);
      }
    };
    createUser();
  };

  return (
    <>
      <Meta title='Prompay | Signup' />
      <div
        data-aos='fade-up-left'
        className="relative bg-[url('/images/bg/signup.png')] bg-center py-[25px] md:pb-[52px] md:z-0 bg-cover z-10"
      >
        <div
          className='absolute top-0 left-0 right-0 bottom-0 h-full  z-[1]'
          style={{
            background: 'rgba(6, 7, 32, 0.73)',
          }}
        />
        <Nav path={navbar} />
        <div className='h-full flex items-center py-3'>
          {/* <Animation style="flip-left" placement="center-center"> */}

          <div className='relative z-10 w-4/5 md:w-[722px] md:h-[735px] bg-white shadow-sm mx-auto  text-black'>
            {isError && (
              <div className='z-10 w-full md:w-[722px]  py-[12px] bg-red-600 flex flex-col items-center justify-center mb-3'>
                <p className='text-white text-center'>{errorMessage}</p>
              </div>
            )}
            <div className='flex flex-col items-center justify-center py-7 md:py-0'>
              <h3 className='font-[700] text-[24px] md:mt-4'>Sign Up</h3>
              <p className='font-[300] text-[15px] leading-4 my-[14px]'>
                It's great to have you on the team!
              </p>
              <form onSubmit={handleSubmit}>
                <div className='md:flex gap-x-[31px]'>
                  <div className=''>
                    <label
                      htmlFor='fname'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      id='fname'
                      placeholder='First Name'
                      className='md:w-[263px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                      value={state.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mt-[15px]'>
                    <label
                      htmlFor='lname'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      id='lname'
                      placeholder='Last Name'
                      className='md:w-[263px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                      value={state.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='md:flex gap-x-[31px] mt-[15px] md:mt-[29px]'>
                  <div className=''>
                    <label
                      htmlFor='birthDay'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      Birthday
                    </label>
                    <input
                      type='date'
                      name='birthDay'
                      id='birthDay'
                      className='md:w-[263px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                      value={state.birthDay}
                      onChange={handleChange}
                    />
                  </div>
                  <div className=''>
                    <label
                      htmlFor='location'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      Location
                    </label>
                    <input
                      type='text'
                      name='location'
                      id='location'
                      placeholder='City'
                      className='md:w-[263px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                      value={state.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='md:flex gap-x-[31px] mt-[15px] md:mt-[29px]'>
                  <div className=''>
                    <label
                      htmlFor='email'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Email'
                      className='md:w-[263px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                      value={state.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mt-[15px]'>
                    <label
                      htmlFor='phone'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      id='phone'
                      placeholder='Phone Number'
                      className='md:w-[263px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                      value={state.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='md:flex gap-x-[31px] mt-[15px] md:mt-[29px]'>
                  <div className=''>
                    <label
                      htmlFor='Password'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='Password'
                      placeholder='Password'
                      className='md:w-[263px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                      value={state.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mt-[15px]'>
                    <label
                      htmlFor='rpassword'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      Repeat Password
                    </label>
                    <input
                      type='password'
                      name='confirmPassword'
                      id='confirmPassword'
                      placeholder='Repeat Password'
                      className='md:w-[263px] h-[42px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2'
                      value={state.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='flex justify-center mt-[15px] md:mt-[29px]'>
                  <div className=''>
                    <label
                      htmlFor='gender'
                      className='font-[300] text-[15px] leading-8 block text-[#979292]'
                    >
                      Gender
                    </label>
                    <div className='flex items-end'>
                      <div className='flex items-center justify-center gap-x-2'>
                        <input
                          type='radio'
                          name='gender'
                          id='male'
                          className='w-[23px] h-[23px] bg-[#F7F6F6] border  border-[#CCCCCC] rounded p-2'
                          value='male'
                          checked={state.gender === 'male'}
                          onChange={handleChange}
                        />{' '}
                        <label
                          htmlFor='male'
                          className='font-[300] text-[15px] text-[#979292]'
                        >
                          Male
                        </label>
                      </div>
                      <input
                        type='radio'
                        name='gender'
                        id='female'
                        className='w-[23px] h-[23px] bg-[#F7F6F6] border border-[#CCCCCC] rounded p-2 ml-[20px]'
                        value='female'
                        checked={state.gender === 'female'}
                        onChange={handleChange}
                      />{' '}
                      <label
                        htmlFor='female'
                        className='font-[300] text-[15px] ml-1 text-[#979292]'
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className='flex gap-[24px] justify-center mt-[20px] md:mt-0'>
                  {loadingSubmit ? (
                    <span className='md:mt-[40px]'>
                      <ButtonLoader />
                    </span>
                  ) : (
                    <button
                      type='submit'
                      className='hover:bg-primaryBlue  bg-primaryGreen text-white py-[16px] px-24px w-[154px] h-[56px] rounded-lg border hover:border-none text-[16px] font-[900] leading-5 text-center md:mt-[40px]'
                    >
                      Sign Up
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          {/* </Animation> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withLogoutAuth(Signup);
