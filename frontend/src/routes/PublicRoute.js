import React from "react";
import useAuth from "./useAuth";
import {Route, Redirect} from "wouter";


function PublicRoute({ component, path }) {

  const isAuth = useAuth();

  if (isAuth === null) {
    return null;
  }

  console.log("Public Route isAuth: "+isAuth);

  return !isAuth ? (
    <Route path={path}>{component}</Route>
  ) : (
    <Redirect to="/login" />
  );

}

export default PublicRoute;
