import React from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import { AiOutlineArrowDown } from "react-icons/ai";
import { data, columns } from "./TableData";

import { GrCheckbox } from "react-icons/gr";
const sortIcon = <AiOutlineArrowDown />;
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

const customStyles = {
  header: {
    style: {
      minHeight: "96px",
      backgroundColor: "#F9FAFB",
    },
  },
  headRow: {
    style: {
      borderTopStyle: "solid",
      borderTopWidth: "1px",
      borderTopColor: defaultThemes.default.divider.default,
      backgroundColor: "#F9FAFB",
      minHeight: "86px",
    },
  },
  rows: {
    style: {
      height: "50px",
    },
    highlightOnHoverStyle: {
      backgroundColor: "rgb(230, 244, 244)",
      borderBottomColor: "#FFFFFF",
      borderRadius: "25px",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },

  headCells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
        height: "50px",
        color: "#6B7280",
        fontSize: "12px",
        fontWeight: 600,
      },
    },
  },
  cells: {
    style: {
      "&:not(:last-of-type)": {
        borderRightStyle: "solid",
        borderRightWidth: "1px",
        borderRightColor: defaultThemes.default.divider.default,
      },
    },
  },
};
const conditionalRowStyles = [
  {
    when: (row) => row.status == "Successful",
    style: {
      backgroundColor: "rgba(248, 148, 6, 0.9)",
      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
];
function DataTableBase(props) {
  return (
    <DataTable
      pagination
      selectableRows
      sortIcon={sortIcon}
      dense
      // progressPending
      responsive
      striped
      direction="auto"
      // expandableRows
      fixedHeader
      fixedHeaderScrollHeight="300px"
      // selectableRowsRadio="checkbox"
      // subHeaderAlign="right"
      // subHeaderWrap
      customStyles={customStyles}
      conditionalColStyles={conditionalRowStyles}
      highlightOnHover
      pointerOnHover
      {...props}
    />
  );
}

export default DataTableBase;
