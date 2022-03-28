import React, {useEffect,useState} from "react";
import useAuth from "./useAuth";
import {Route, Redirect} from "wouter";


function PrivateRoute({ component, path }) {
  const isAuth = useAuth();
  const renderFunction = () => isAuth ? component :<Redirect to="/login" />;
  return (<route path={path}>{ renderFunction() }</route>)
}

export default PrivateRoute;
