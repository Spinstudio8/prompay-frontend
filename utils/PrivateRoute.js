import React from "react";
// import { Outlet, Navigate } from "react-router-dom";
import { getToken } from "./common";

const PrivateRoute = () => {
  const token = getToken();
  // console.log(token);
  // return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
