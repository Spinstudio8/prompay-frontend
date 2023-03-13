import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useStateContext } from '../auth/AuthContext';

function DashboardLayout({ children }) {
  const { activeMenu, darkToggle } = useStateContext();

  return (
    <div className={`${darkToggle && 'dark'} App`}>
      {/* <HashRouter> */}
      <div className='flex relative dark:bg-main-dark-bg'>
        {activeMenu ? (
          <div className='w-72 md:w-[20%] fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : null}

        <div
          className={`
              ${
                activeMenu ? 'md:ml-[20%]' : 'flex-2'
              } dark:bg-main-bg bg-main-bg hide-scrollbar overflow-auto w-full`}
        >
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
