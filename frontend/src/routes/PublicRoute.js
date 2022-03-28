import React from "react";
import useAuth from "./useAuth";
import {Route, Redirect} from "wouter";


function PublicRoute({ children, path }) {

  const isAuth = useAuth();

  if (isAuth === null) {
    return null;
  }

  return !isAuth ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );

}

export default PublicRoute;
