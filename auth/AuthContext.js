import { useContext, createContext } from 'react';
import { useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState();
  const [screenSize, setScreenSize] = useState(undefined);
  const [darkToggle, setDarkToggle] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };

  return (
    <AuthContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        darkToggle,
        setDarkToggle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(AuthContext);
};
