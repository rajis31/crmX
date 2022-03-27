import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ children, isAutheticated }) {
    console.log("call from publicRoute");
    console.log(children);
    return !isAutheticated ? children : <Navigate to="/login" />;
  }

export default PublicRoute;