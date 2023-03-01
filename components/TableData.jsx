export const columns = [
  //   {
  //     cell: () => <Icon style={{ fill: "#43a047" }} />,
  //     width: "56px", // custom width for icon button
  //     style: {
  //       borderBottom: "1px solid #FFFFFF",
  //       marginBottom: "-1px",
  //     },
  //   },
  {
    name: 'TRANSACTIONS',
    selector: (row) => row.transaction,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#111928',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  {
    name: 'DATE',
    selector: (row) => row.date,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#6B7280',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  {
    name: 'AMOUNT',
    selector: (row) => row.amount,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#111928',
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  {
    name: 'STATUS',
    selector: (row) => row.status,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      //   color: "#03543F",
      fontSize: '14px',
      fontWeight: 400,
      //   backgroundColor: "#DEF7EC",
      borderRadius: '6px',
      //   marginLeft: "20px",
      //   marginRight: "120px",
    },
  },
  //   {
  // 		cell: row => <CustomMaterialMenu size="small" row={row} />,
  // 		allowOverflow: true,
  // 		button: true,
  // 		width: '56px',
  // 	},
];

export const tabledata = [
  {
    transaction: 'Payment from Prompay',
    date: 'Apr 23 ,2021',
    amount: 2300,
    status: 'Successful',
  },
  {
    transaction: 'Recharge card purchase',
    date: 'Apr 23, 2021',
    amount: 670,
    status: 'Successful',
  },
  {
    transaction: 'Withdrawn to account',
    date: 'Apr 18, 2021',
    amount: 670,
    status: 'Failed',
  },
];

// export default { tabledata, columns };

export const questionColumns = [
  {
    name: 'SUBJECT',
    selector: (row) => row.subject?.title,
    sortable: true,
    reorder: true,
    style: {
      color: '#111928',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  {
    name: 'QUESTION',
    selector: (row) => row.questionPlainText,
    sortable: true,
    reorder: true,
    grow: 3,
    style: {
      color: '#6B7280',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
];

export const transactionColumns = [
  {
    name: 'TRANSACTIONS',
    selector: (row) => row.type,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#111928',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  {
    name: 'DATE',
    selector: (row) => row.date,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#6B7280',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  {
    name: 'AMOUNT',
    selector: (row) => row.amount,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#111928',
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  {
    name: 'STATUS',
    selector: (row) => row.status,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      //   color: "#03543F",
      fontSize: '14px',
      fontWeight: 400,
      //   backgroundColor: "#DEF7EC",
      borderRadius: '6px',
      //   marginLeft: "20px",
      //   marginRight: "120px",
    },
  },
];

export const paymentColumns = [
  {
    name: 'ASSESSMENTS',
    selector: (row) => row.assessment,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#111928',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  {
    name: 'DATE',
    selector: (row) => row.date,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#6B7280',
      fontSize: '14px',
      fontWeight: 400,
    },
  },
  {
    name: 'AMOUNT',
    selector: (row) => row.amount,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      color: '#111928',
      fontSize: '14px',
      fontWeight: 500,
    },
  },
  {
    name: 'STATUS',
    selector: (row) => row.status,
    sortable: true,
    reorder: true,
    grow: 2,
    style: {
      //   color: "#03543F",
      fontSize: '14px',
      fontWeight: 400,
      //   backgroundColor: "#DEF7EC",
      borderRadius: '6px',
      //   marginLeft: "20px",
      //   marginRight: "120px",
    },
  },
];
