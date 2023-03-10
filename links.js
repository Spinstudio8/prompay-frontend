import { AiFillHome } from 'react-icons/ai';
import { DiGoogleAnalytics } from 'react-icons/di';
import { ImUsers } from 'react-icons/im';
import {
  BiCategoryAlt,
  BiPencil,
  BiUserCircle,
  BiSupport,
} from 'react-icons/bi';
import { BsQuestionSquareFill } from 'react-icons/bs';
import {
  MdCategory,
  MdOutlineDashboard,
  MdOutlineAccountBalanceWallet,
  MdOutlinePayments,
  MdOutlineSettings,
  MdAssessment,
} from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
// import { BiPencil } from "react-icons/bi";

export const userLinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <MdOutlineDashboard />,
        path: 'dashboard',
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'assessment',
        icon: <MdAssessment />,
        path: 'assessment',
      },
      {
        name: 'wallet',
        icon: <MdOutlineAccountBalanceWallet />,
        path: 'wallet',
      },
      {
        name: 'payment history',
        icon: <MdOutlinePayments />,
        path: 'payment-history',
      },
      {
        name: 'support',
        icon: <BiSupport />,
        path: 'dashboard',
      },
    ],
  },
];

export const adminLinks = [
  {
    title: 'Overview',
    links: [
      {
        name: 'overview',
        icon: <MdOutlineDashboard />,
        path: 'overview',
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'admins',
        icon: <BiUserCircle />,
        path: 'admins',
      },
      {
        name: 'manage users',
        icon: <ImUsers />,
        path: 'manage-users',
      },
      {
        name: 'manage questions',
        icon: <BsQuestionSquareFill />,
        path: 'manage-questions',
      },
      {
        name: 'manage withdrawals',
        icon: <MdOutlinePayments />,
        path: 'manage-withdrawals',
      },
      {
        name: 'wallet',
        icon: <MdOutlineAccountBalanceWallet />,
        path: 'wallet',
      },
      {
        name: 'payment history',
        icon: <MdOutlinePayments />,
        path: 'payment-history',
      },
      {
        name: 'support',
        icon: <BiSupport />,
        path: 'dashboard',
      },
      {
        name: 'platform settings',
        icon: <MdOutlineSettings />,
        path: 'platform-settings',
      },
    ],
  },
];
