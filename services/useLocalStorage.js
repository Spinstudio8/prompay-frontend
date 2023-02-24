import React, {useEffect} from 'react';

const useSetLocalStorage = ({ name }) => {
    
    let value = "";
    useEffect(() => {
      value = sessionStorage.setItem(name);
    }, []);
  
    return value;
  };