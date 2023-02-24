import React from "react";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { links } from "../links";
import Link from "next/link";
import { useStateContext } from "../auth/AuthContext";

const Sidebar = () => {
  let { activeMenu, setActiveMenu, screenSize, logout, login } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  // private $servername = "ftp.alfaahizuunschools.com";
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-blue-500 text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#8C8D8E] font-[400] text-[16px] dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-auto overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              href="/dashboard"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img src="/images/logo.png" alt="Prompay Logo" />
              {/* <span>Prompay</span> */}
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu((prevState) => !prevState)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10 w-[225px]">
            {links.map((item) => (
              <div key={item.title}>
                {/* <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p> */}

                {item.links.map((link) => {
                  return (
                    <Link
                      href={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSidebar}
                      className={activeMenu ? normalLink : activeLink}
                    >
                      {link.icon}
                      <span className="capitalize">
                        {link.name || "overview"}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </>
      )}
      {/* <button
        onClick={handleLogout}
        className="flex items-center w-[90%] gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-red-500 mt-[40px]"
      >
        <FiLogOut />
        <span className="capitalize">logout</span>
      </button> */}
    </div>
  );
};

export default Sidebar;
