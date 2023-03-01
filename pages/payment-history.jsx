import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import DataTableBase from '../components/DataTableBase';
import { FiSearch } from 'react-icons/fi';
import { paymentColumns } from '../components/TableData';
import differenceBy from 'lodash/differenceBy';
import { getUserWallet } from '../services/userService';

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

const PaymentHistory = () => {
  const { tokenPayload, token } = useSelector((state) => state.user);
  const [filterText, setFilterText] = React.useState('');
  const [userWallet, setUserWallet] = useState({
    wallet: 0,
    payments: [],
  });

  const filteredItems = userWallet.payments.filter((item) => {
    return (
      (item.assessment &&
        item.assessment.toLowerCase().includes(filterText.toLowerCase())) ||
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
    const getWallet = async () => {
      try {
        const { data } = await getUserWallet(tokenPayload.id, token);
        setUserWallet(data);
        console.log(data);
        setRows(data.payments);
        setPending(false);
      } catch (err) {
        setPending(true);
      }
    };

    getWallet();
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
            <h2 className='font-[500] text-[24px] leading-7 mb-[20px] md:mb-[49px]'>
              Payment History
            </h2>

            <div
              className='mt-[10px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
              style={{
                boxShadow:
                  '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {subHeaderComponentMemo}
              <DataTableBase
                columns={paymentColumns}
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

export default PaymentHistory;
