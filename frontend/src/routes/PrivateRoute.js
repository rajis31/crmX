import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, isAutheticated }) {
    return isAutheticated ? children : <Navigate to="/login" />;
  }

export default PrivateRoute;