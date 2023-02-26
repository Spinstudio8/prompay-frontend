import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // import the styles
import DashboardLayout from '../../components/DashboardLayout';
import { getSubjects } from '../../services/subjectService';

const AddQuestion = () => {
  const [subjects, setSubjects] = useState([]);
  const [value, setValue] = useState('');

  function handleChange(newValue) {
    setValue(newValue);
    console.log(newValue);
  }

  useEffect(() => {
    const getAllsubjects = async () => {
      try {
        const { data } = await getSubjects();
        setSubjects(data);
      } catch (err) {}
    };

    getAllsubjects();
  }, []);

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  '>
          <div className='pt-[90px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <div className='flex justify-between mb-[20px] md:mb-[49px]'>
              <h2 className='font-[500] text-[24px] leading-7'>
                Add new question
              </h2>
            </div>
            <div className='mt-10 md:w-4/5'>
              <div className='w-full mb-2'>
                <label htmlFor='subject' className='block font-bold'>
                  Subject
                </label>
                <select
                  name='subject'
                  id='subject'
                  className='w-[80%] md:w-[45%] py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded'
                  onChange={(e) => console.log(e.target.value)}
                >
                  <option value=''>Select Subject</option>
                  {subjects.map((subject) => (
                    <option key={subject._id} value={subject.title}>
                      {subject.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className='w-full mb-2'>
                <label htmlFor='description' className='block font-bold'>
                  Description
                </label>
                <textarea
                  name='description'
                  id='description'
                  className='w-full h-[60px] bg-light-gray border border-[rgba(0,0,0,0.2)] rounded p-2 resize-none'
                ></textarea>
              </div>
              <div className='w-full mb-2'>
                <label htmlFor='question' className='block'>
                  Question
                </label>
                <ReactQuill
                  value={value}
                  onChange={handleChange}
                  className='h-[200px] mb-[100px] md:mb-[70px]'
                />
              </div>
              <div className='w-full mb-2'>
                <label htmlFor='optionA' className='block font-bold'>
                  Option A
                </label>
                <input
                  type='text'
                  id='optionA'
                  name='optionA'
                  className='w-[80%] md:w-[45%] py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded'
                />
                <input
                  type='radio'
                  name='answer'
                  value={0}
                  className='w-[20px] h-[20px] mx-4'
                />
              </div>
              <div className='w-full mb-2'>
                <label htmlFor='optionB' className='block font-bold'>
                  Option B
                </label>
                <input
                  type='text'
                  id='optionB'
                  name='optionB'
                  className='w-[80%] md:w-[45%] py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded'
                />
                <input
                  type='radio'
                  name='answer'
                  value={1}
                  className='w-[20px] h-[20px] mx-4'
                />
              </div>
              <div className='w-full mb-2'>
                <label htmlFor='optionC' className='block font-bold'>
                  Option C
                </label>
                <input
                  type='text'
                  id='optionC'
                  name='optionC'
                  className='w-[80%] md:w-[45%] py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded'
                />
                <input
                  type='radio'
                  name='answer'
                  value={2}
                  className='w-[20px] h-[20px] mx-4'
                />
              </div>
              <div className='w-full mb-2'>
                <label htmlFor='optionD' className='block font-bold'>
                  Option D
                </label>
                <input
                  type='text'
                  id='optionD'
                  name='optionD'
                  className='w-[80%] md:w-[45%] py-2 pl-2 bg-light-gray border border-[rgba(0,0,0,0.2)] rounded'
                />
                <input
                  type='radio'
                  name='answer'
                  value={3}
                  className='w-[20px] h-[20px] mx-4'
                />
              </div>
              <div className='my-8 flex gap-[24px]'>
                <button className=' bg-primaryGreen hover:bg-black text-white px-5 py-2 flex items-center justify-center rounded'>
                  Add question
                </button>
                <button className='bg-black text-white px-5 py-2 flex items-center justify-center rounded'>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddQuestion;
