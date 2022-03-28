import React from "react";
import { Navigate } from "react-router-dom";
import checksessionID from "./useAuth";

async function PublicRoute({ children }) {
    console.log(await checksessionID()); 
    let isAuthenticated = false;
    return !isAuthenticated ? children : <Navigate to="/login" />;
  }

export default PublicRoute;