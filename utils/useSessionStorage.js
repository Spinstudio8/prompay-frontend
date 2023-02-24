import React, { useState, useEffect } from "react";

const useGetSessionStorage = ({ name }) => {
  // const [value, setValue] = useState("");
  let value = "";
  useEffect(() => {
    // setValue(sessionStorage.getItem(name));
    value = sessionStorage.getItem(name);
  }, []);

  return value;
};

const useSetSessionStorage = ({ name }) => {
  // const [value, setValue] = useState("");
  let value = "";
  useEffect(() => {
    setValue(sessionStorage.setItem(name));
    value = sessionStorage.setItem(name);
  }, []);

  return value;
};
const UseRemoveSessionStorage = ({ name }) => {
  // const [value, setValue] = useState("");
  let value = "";
  useEffect(() => {
    // setValue(sessionStorage.removeItem(name));
    value = sessionStorage.removeItem(name);
  }, []);

  return value;
};
export { useGetSessionStorage, useSetSessionStorage, UseRemoveSessionStorage };
