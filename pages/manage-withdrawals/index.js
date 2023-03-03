import React, { useMemo, useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import DataTableBase from '../../components/DataTableBase';
import { FiSearch } from 'react-icons/fi';
import { questionColumns } from '../../components/TableData';
import differenceBy from 'lodash/differenceBy';
import { getQuestions } from '../../services/questionService';

const SearchComponent = ({ onFilter, filterText }) => (
  <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-4/5 md:w-[325px] h-[42px] py-[12-x] px-[16px] items-center border border-[#D1D5DB] bg-[#F9FAFB] rounded-lg mb-[16px]'>
    <FiSearch />
    <input
      type='text'
      className='p-2 bg-transparent outline-none w-[90%]'
      placeholder='Search'
      onChange={onFilter}
      name={filterText}
      value={filterText}
    />
  </div>
);

const ManageWithdrawals = () => {
  const { token } = useSelector((state) => state.user);
  const [questions, setQuestions] = useState([]);

  const [filterText, setFilterText] = React.useState('');
  const filteredItems = questions.filter((item) => {
    return (
      (item.subject.title &&
        item.subject.title.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.questionPlainText &&
        item.questionPlainText.toLowerCase().includes(filterText.toLowerCase()))
    );
  });
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(filteredItems);

  React.useEffect(() => {
    const getAllQuestions = async () => {
      try {
        const { data } = await getQuestions(token);
        setQuestions(data);
        setRows(data);
        setPending(false);
      } catch (error) {
        setPending(true);
      }
    };

    getAllQuestions();
  }, []);

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <SearchComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  //   const actionsMemo = React.useMemo(
  //     () => <Export onExport={() => downloadCSV(questionColumns)} />,
  //     []
  //   );

  // rOW SELECTION
  const handleRowSelected = React.useCallback((state) => {
    console.log(state);
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r) => r.title
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setData(differenceBy(data, selectedRows, 'title'));
      }
    };

    return (
      <button
        key='delete'
        onClick={handleDelete}
        style={{ backgroundColor: 'red' }}
        icon
      >
        Delete
      </button>
    );
  }, [data, selectedRows, toggleCleared]);

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  '>
          <div className='pt-[110px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <div className='flex justify-between mb-[20px] md:mb-[49px]'>
              <h2 className='font-[500] text-[24px] leading-7'>Questions</h2>
              <Link
                href='/manage-questions/add'
                className=' bg-primaryGreen hover:bg-black text-white px-5 py-2 flex items-center justify-center rounded'
              >
                Add
              </Link>
            </div>
            <div
              className='mt-[10px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
              style={{
                boxShadow:
                  '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {subHeaderComponentMemo}
              <DataTableBase
                columns={questionColumns}
                data={questions}
                progressPending={pending}
                contextActions={contextActions}
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleCleared}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ManageWithdrawals;
