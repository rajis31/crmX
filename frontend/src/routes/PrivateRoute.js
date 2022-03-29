import React from "react";
import useAuth from "./useAuth";
import {Route, Redirect} from "wouter";


function PrivateRoute({ children, path, type }) {

  if(type ===  "public"){
    return (<Route path={path}>{ children }</Route>);

  } else if (type === "private"){

    const isAuth = useAuth();

    if(isAuth === null){
      return null;
    }

    return isAuth ? <Route path={path}>{children}</Route> : 
                    <Redirect to="/login" />;
  } else{
      return <Redirect to="/login" />;
  }

}

export default PrivateRoute;
