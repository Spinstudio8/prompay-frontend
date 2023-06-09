import React, { useMemo, useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import DataTableBase from "../../components/DataTableBase";
import { FiSearch } from "react-icons/fi";
import { withdrawalColumns } from "../../components/TableData";
import differenceBy from "lodash/differenceBy";
import { getWithdrawals } from "../../services/withdrawalService";
import withAdminAuth from "../../auth/withAdminAuth";
import Meta from "../../components/Meta";

const SearchComponent = ({ onFilter, filterText }) => (
  <div className="dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-4/5 md:w-[325px] h-[42px] py-[12-x] px-[16px] items-center border border-[#D1D5DB] bg-[#F9FAFB] rounded-lg mb-[16px]">
    <FiSearch />
    <input
      type="text"
      className="p-2 bg-transparent outline-none w-[90%]"
      placeholder="Search"
      onChange={onFilter}
      name={filterText}
      value={filterText}
    />
  </div>
);

const ManageWithdrawals = () => {
  const router = useRouter();
  const { token } = useSelector((state) => state.user);
  const [withdrawals, setWithdrawals] = useState([]);

  const [filterText, setFilterText] = React.useState("pending");
  const filteredItems = withdrawals.filter((item) => {
    return (
      (item._id && item._id.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.amount &&
        item.amount
          .toString()
          .toLowerCase()
          .includes(filterText.toLowerCase())) ||
      (item.status &&
        item.status.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.createdAt &&
        item.createdAt.toLowerCase().includes(filterText.toLowerCase()))
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
    const getAllWithdrawals = async () => {
      try {
        const { data } = await getWithdrawals(token);
        setWithdrawals(data);
        setRows(data);
        setPending(false);
      } catch (error) {
        setPending(true);
      }
    };

    getAllWithdrawals();
  }, []);

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
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

  const viewWithdrawal = (withdrawal) => {
    router.push(`/manage-withdrawals/${withdrawal._id}`);
  };

  return (
    <>
      <Meta title="Prompay | Manage Withdrawals" />
      <DashboardLayout>
        <div className="dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  ">
          <div className="pt-[110px] md:pt-[46px] mx-[15px] md:mx-[50px]">
            <div className="flex justify-between mb-[20px] md:mb-[49px]">
              <h2 className="font-[500] text-[24px] leading-7 text-black dark:text-white">
                Withdrawal Requests
              </h2>
            </div>
            <div
              className="mt-[10px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white"
              style={{
                boxShadow:
                  "0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex gap-6 items-start">
                {subHeaderComponentMemo}{" "}
                <button className="rounded-md text-center bg-primaryGreen text-white p-2 flex items-center justify-center w-max h-[35px]">
                  All
                </button>
              </div>

              <DataTableBase
                columns={withdrawalColumns}
                data={filteredItems}
                progressPending={pending}
                clearSelectedRows={toggleCleared}
                onRowClicked={(row, event) => viewWithdrawal(row)}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default withAdminAuth(ManageWithdrawals);
