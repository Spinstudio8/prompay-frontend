import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../components/DashboardLayout';
import { getUserProfile, updateUserProfile } from '../services/userService';
import Loader from '../components/Loader';
import { toDateString, toHtmlDate } from '../utils/dateHelper';
import { setUpdateUser, setLogin } from '../store/slice/userSlice';
import withLoginAuth from '../auth/withLoginAuth';

const Profile = () => {
  const dispatch = useDispatch();
  const { token, tokenPayload } = useSelector((state) => state.user);
  const [fullName, setFullName] = useState('');
  const [userProfile, setUserProfile] = useState({
    email: '',
    _id: '',
    role: '',
    firstName: '',
    lastName: '',
    gender: '',
    phone: '',
    location: '',
    imageUrl: '',
    isAdmin: '',
    isVerified: '',
    createdAt: '',
    birthDay: '',
    updatedAt: '',
  });
  const [userProfileLoading, setUserProfileLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getUserProfile(tokenPayload.id, token);
        setUserProfile({ ...userProfile, ...data });
        setFullName(`${data.firstName} ${data.lastName}`);
        setUserProfileLoading(false);
      } catch (error) {
        // console.error(error);
      }
    };

    getUser();
  }, []);

  const handleChange = (e) => {
    setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };

  const refresh = async () => {
    try {
      const { data } = await getUserProfile(tokenPayload.id, token);
      setUserProfile({ ...userProfile, ...data });
    } catch (error) {
      // console.error(error);
    }
  };

  const updateProfile = async () => {
    setUserProfileLoading(true);
    setErrorMessage('');

    const formData = {
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      location: userProfile.location,
    };

    try {
      const { data } = await updateUserProfile(
        formData,
        tokenPayload.id,
        token
      );
      setUserProfile({ ...userProfile, ...data, token: undefined });
      dispatch(setLogin(data.token));
      dispatch(
        setUpdateUser({
          userInfo: data,
        })
      ); // update user token
      setFullName(`${data.firstName} ${data.lastName}`);
      setUserProfileLoading(false);
    } catch (error) {
      if (error.response && error.response?.data) {
        setErrorMessage(error.response.data.message);
      }
      setUserProfileLoading(false);
    }
  };

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  '>
          <div className='pt-[110px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <div className='flex justify-center mb-[20px] md:mb-[49px]'>
              <h2 className='font-[500] text-[24px] leading-7'>Profile</h2>
            </div>
            <div
              className='mt-[10px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
              style={{
                boxShadow:
                  '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {userProfileLoading ? (
                <Loader />
              ) : (
                <div className='w-full'>
                  <div className='h-[140px] bg-primaryGreen rounded-t-lg'></div>
                  <div className='relative bg-white rounded-b-lg shadow-md px-4 pb-5 mb-2'>
                    <span className='inline-block text-[100px] md:text-[130px] rounded-[50%] bg-white p-1 mt-[-32px] md:mt-[-42px] ml-[3%]'>
                      <FaUserCircle />
                    </span>
                    {userProfile.isVerified ? (
                      <span className='absolute top-8 right-5 text-primaryGreen font-semibold'>
                        Verified
                      </span>
                    ) : (
                      <span className='absolute top-8 right-5 text-yellow-300 font-semibold'>
                        Verify
                      </span>
                    )}

                    <div className='flex flex-col sm:flex-row justify-between w-full mt-3'>
                      <div>
                        <div className='text-[1.5rem] font-bold'>
                          {fullName}
                        </div>
                        <div className='font-semibold'>
                          ID: {userProfile?._id}
                        </div>
                        <div className='mt-2'>
                          Joined on {toDateString(userProfile.createdAt)}
                        </div>
                        <div>
                          Last updated {toDateString(userProfile.updatedAt)}
                        </div>
                      </div>

                      <div className='flex gap-3 mt-4 sm:mt-0'>
                        <span
                          onClick={() => refresh()}
                          className='bg-[rgba(0,0,0,0.1)] px-3 py-1 rounded-lg hover:bg-[rgba(0,0,0,0.2)] font-semibold cursor-pointer w-max h-max'
                        >
                          Refresh
                        </span>
                        <span
                          onClick={() => updateProfile()}
                          className='bg-primaryGreen text-white px-3 py-1 rounded-lg hover:bg-primaryBlue font-semibold cursor-pointer w-max h-max'
                        >
                          Save
                        </span>
                      </div>
                    </div>
                    <div className='sm:grid sm:place-content-center mt-5 md:mt-10'>
                      <div className=''>
                        {errorMessage && (
                          <p className='text-center text-red-600 text-[14px] mb-4'>
                            {errorMessage}
                          </p>
                        )}
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4'>
                          <div className=''>
                            <label htmlFor='firstName' className='block'>
                              First name
                            </label>
                            <input
                              type='text'
                              name='firstName'
                              value={userProfile.firstName}
                              className='bg-light-gray border-black border rounded pl-2 py-1 w-full sm:w-[normal]'
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div>
                            <label htmlFor='lastName' className='block'>
                              Last name
                            </label>
                            <input
                              type='text'
                              name='lastName'
                              value={userProfile.lastName}
                              className='bg-light-gray border-black border rounded pl-2 py-1 w-full sm:w-[normal]'
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4'>
                          <div className=''>
                            <label htmlFor='phone' className='block'>
                              Phone
                            </label>
                            <input
                              type='tel'
                              name='phone'
                              value={userProfile.phone}
                              className='bg-light-gray border-black border rounded pl-2 py-1 w-full sm:w-[normal]'
                              onChange={(e) => handleChange(e)}
                              disabled={true}
                            />
                          </div>
                          <div>
                            <label htmlFor='gender' className='block'>
                              Gender
                            </label>
                            <input
                              type='text'
                              name='gender'
                              value={userProfile.gender}
                              className='bg-light-gray border-black border rounded pl-2 py-1 w-full sm:w-[normal]'
                              onChange={(e) => handleChange(e)}
                              disabled={true}
                            />
                          </div>
                        </div>
                        <div className='mb-4'>
                          <label htmlFor='birthDay' className='block'>
                            Birth Day
                          </label>
                          <input
                            type='date'
                            name='birthDay'
                            id='birthDay'
                            value={toHtmlDate(userProfile.birthDay)}
                            className='bg-light-gray border-black border rounded pl-2 py-1 w-full'
                            onChange={(e) => handleChange(e)}
                            disabled={true}
                          />
                        </div>
                        <div className='mb-4'>
                          <label htmlFor='email' className='block'>
                            Email
                          </label>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            value={userProfile.email}
                            className='bg-light-gray border-black border rounded pl-2 py-1 w-full'
                            onChange={(e) => handleChange(e)}
                            disabled={true}
                          />
                        </div>
                        <div className='mb-4'>
                          <label htmlFor='location' className='block'>
                            Location
                          </label>
                          <input
                            type='text'
                            name='location'
                            id='location'
                            value={userProfile.location}
                            className='bg-light-gray border-black border rounded pl-2 py-1 w-full'
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className='mb-4'>
                          <label htmlFor='role' className='block'>
                            Role
                          </label>
                          <input
                            type='text'
                            name='role'
                            id='role'
                            value={userProfile.role}
                            className='bg-light-gray border-black border rounded pl-2 py-1 w-full'
                            onChange={(e) => handleChange(e)}
                            disabled={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default withLoginAuth(Profile);
