import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GrKey } from 'react-icons/gr';

const bgColor = 'bg-gray-100';

function ChangePassword() {
  const [errorMessage, setErrorMessage] = useState('');
  const [isEdit, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!isEdit);
    console.log('edit');
  };

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${
        isEdit ? bgColor : null
      }  border border-gray-400 w-full rounded-sm px-[10px] shadow-sm py-[10px]`}
    >
      <div
        onClick={() => handleEdit()}
        className='w-full flex justify-between items-center cursor-pointer'
      >
        <div className='flex gap-4 items-center'>
          <div className='xs:text-[20px] xs:ml-[10px]'>
            <GrKey />
          </div>
          <div>
            <h3>Change Password</h3>
            <p className='text-[rgba(0,0,0,0.6)] hidden xs:block'>
              It's a good idea to use a strong password that you're not using
              elsewhere
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
          <form onSubmit={handleSubmit}>
            <div className='mb-[30px]'>
              <label
                htmlFor='currentPassword'
                className='font-semibold mr-4 xs:w-[92px] block xs:inline-block xs:text-right'
              >
                Current
              </label>
              <input
                id='currentPassword'
                type='password'
                name='currentPassword'
                value={''}
                className='bg-light-gray border-black border rounded pl-2'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='mb-[15px]'>
              <label
                htmlFor='newPassword'
                className='font-semibold mr-4 xs:w-[92px] block xs:inline-block xs:text-right'
              >
                New
              </label>
              <input
                id='newPassword'
                type='password'
                name='newPassword'
                value={''}
                className='bg-light-gray border-black border rounded pl-2'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='mb-[15px]'>
              <label
                htmlFor='confirmPassword'
                className='font-semibold mr-4 xs:w-[92px] block xs:inline-block xs:text-right'
              >
                Re-type new
              </label>
              <input
                id='confirmPassword'
                type='password'
                name='confirmPassword'
                value={''}
                className='bg-light-gray border-black border rounded pl-2'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='text-center'>
              {errorMessage && <p className='text-red-600 text-[14px]'></p>}
              <button
                type='submit'
                className='bg-primaryGreen text-white px-3 py-1 mt-4 rounded-lg hover:bg-primaryBlue font-semibold cursor-pointer w-max h-max'
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChangePassword;
