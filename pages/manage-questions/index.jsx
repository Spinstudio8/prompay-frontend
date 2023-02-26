import React, { useMemo } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import DataTable from 'react-data-table-component';

import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { ImUsers } from 'react-icons/im';
import { HiOutlineUserGroup } from 'react-icons/hi';
import Link from 'next/link';
import DataTableBase from '../../components/DataTableBase';
import { FiSearch } from 'react-icons/fi';
import { tabledata, columns } from '../../components/TableData';
import differenceBy from 'lodash/differenceBy';

// import Export from "react-data-table-component";

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

const ManageQuestions = () => {
  const [filterText, setFilterText] = React.useState('');
  const filteredItems = tabledata.filter((item) => {
    return (
      (item.transaction &&
        item.transaction.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.date &&
        item.date.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.amount && item.amount.toString().includes(filterText.toString())) ||
      (item.status &&
        item.status.toLowerCase().includes(filterText.toLowerCase()))
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
    const timeout = setTimeout(() => {
      setRows(tabledata);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
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
  //     () => <Export onExport={() => downloadCSV(columns)} />,
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
          <div className='pt-[90px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
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
                columns={columns}
                data={filteredItems}
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

export default ManageQuestions;
