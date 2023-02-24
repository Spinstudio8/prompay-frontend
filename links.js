import { AiFillHome } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import { ImUsers } from "react-icons/im";
import { BiCategoryAlt, BiPencil } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
// import { BiPencil } from "react-icons/bi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <AiFillHome />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      // {
      //   name: "Total Votes",
      //   icon: <DiGoogleAnalytics />,
      // },
      {
        name: "assessment",
        icon: <ImUsers />,
      },
      {
        name: "wallet",
        icon: <HiOutlineUserGroup />,
      },
      {
        name: "payment-history",
        icon: <HiOutlineUserGroup />,
      },
      // {
      //   name: "edit-nominees",
      //   icon: <BiPencil />,
      // },
      {
        name: "support",
        icon: <MdCategory />,
      },
    ],
  },
];
