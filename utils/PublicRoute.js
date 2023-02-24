import React from "react";
// import { Outlet, Navigate } from "react-router-dom";
import { getToken } from "./common";

const PublicRoute = () => {
  const token = getToken();
  // return !token ? <Outlet /> : <Navigate to="/overview" />;
};

export default PublicRoute;
