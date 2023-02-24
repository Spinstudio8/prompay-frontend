import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useStateContext } from "../auth/AuthContext";

function DashboardLayout({ children }) {
  const { activeMenu, darkToggle, login } = useStateContext();

  // const location = useLocation();
  // console.log('hash', location.hash);
  // console.log(login)
  return (
    <div className={`${darkToggle && "dark"} App`}>
      {/* <HashRouter> */}
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div
            className={` ${
              login
                ? "hidden w-0 md:w-0"
                : "w-72 md:w-[20%] fixed sidebar dark:bg-secondary-dark-bg bg-white"
            } `}
          >
            <Sidebar />
          </div>
        ) : (
          <div
            className={`${
              login ? "hidden w-0" : "w-0 dark:bg-secondary-dark-bg"
            } `}
          >
            <Sidebar />
          </div>
        )}

        <div
          className={`
              ${
                activeMenu && !login ? "md:ml-[20%]" : "flex-2"
              } dark:bg-main-bg bg-main-bg min-h-screen w-full`}
        >
          <div
            className={`${
              login
                ? "hidden w-0"
                : "fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"
            }`}
          >
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
