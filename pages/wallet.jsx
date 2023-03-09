import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import DataTableBase from '../components/DataTableBase';
import { FiSearch } from 'react-icons/fi';
import { transactionColumns } from '../components/TableData';
import differenceBy from 'lodash/differenceBy';
import { getUserWallet } from '../services/userService';
import WithdrawModal from '../components/WithdrawModal';

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

const Wallet = () => {
  const { tokenPayload, token } = useSelector((state) => state.user);
  const [filterText, setFilterText] = React.useState('');
  const [userWallet, setUserWallet] = useState({
    wallet: 0,
    transactions: [],
  });
  const [modalState, setModalState] = useState(false);

  const filteredItems = userWallet.transactions.filter((item) => {
    return (
      (item.type &&
        item.type.toLowerCase().includes(filterText.toLowerCase())) ||
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
        setRows(data.transactions);
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
  //     () => <Export onExport={() => downloadCSV(transactionColumns)} />,
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
          <div className='pt-[90px] md:pt-[46px] mx-[15px] md:mx-[50px] text-black'>
            <h2 className='font-[500] text-[24px] leading-7'>Wallets</h2>
            <div className='flex items-center justify-center md:justify-start'>
              <div
                className='w-[280px] h-[140px] flex flex-col justify-center text-white dark:border mt-[20px] mx-[10px] md:mx-0 dark:border-gray-200 rounded-[4px] shadow z-10'
                style={{
                  background: '#00A651',
                }}
              >
                <div className='flex flex-col items-center justify-center '>
                  <p className='text-[32px] font-[500] text-white mt-[25px]'>
                    ₦{userWallet.wallet}
                    <small className='text-[20px] font-[500] text-white'>
                      .00
                    </small>
                  </p>
                  <p
                    className={`text-white font-[500] text-[20px] leading-7 self-start mt-[24px] pl-[10px]`}
                  >
                    Earnings
                  </p>
                </div>
              </div>
            </div>
            <div className='md:flex md:justify-between pb-[20px] items-end'>
              <p className='font-[500] text-[16px] leading-7 my-3 md:my-0 '>
                Transactions
              </p>
              <div className='flex flex-col md:flex-row gap-y-4 gap-x-4'>
                <button className='bg-transparent border border-primaryGreen hover:bg-primaryGreen text-primaryGreen hover:text-white px-5 py-3 flex items-center justify-center rounded'>
                  Convert to data/Airtime
                </button>
                <button
                  onClick={() => setModalState(!modalState)}
                  className=' bg-primaryGreen text-white px-5 py-3 flex items-center justify-center rounded'
                >
                  Withdraw
                </button>
              </div>
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
                columns={transactionColumns}
                data={filteredItems}
                progressPending={pending}
                contextActions={contextActions}
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleCleared}
              />
            </div>
          </div>
        </div>
        <WithdrawModal showModal={modalState} setModalState={setModalState} />
      </DashboardLayout>
    </>
  );
};

export default Wallet;
