import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AuthRoute() {
  const isAuthenticated = sessionStorage.getItem("token");

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default AuthRoute;
