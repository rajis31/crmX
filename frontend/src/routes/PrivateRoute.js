import React from "react";
import { Navigate } from "react-router-dom";
import checksessionID from "./useAuth";

function PrivateRoute({ children }) {
    const isAuthenticated = checksessionID();
    console.log(isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

export default PrivateRoute;