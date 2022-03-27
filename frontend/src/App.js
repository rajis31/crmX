import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const LoginPage = lazy(() => import('./components/Login/Login'));
const Register = lazy(() => import('./components/Register/Register'));
const ForgotPassword = lazy(() => import('./components/Forgot/Forgot'));

import routes from './routes/Routes';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getCookie } from './Helpers/Helpers';
import axios from 'axios';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checksessionID = () => {
    const session_id = getCookie("session_id");
    axios.post("http://localhost:3000/user/check_session_id",
      {
        session_id: getCookie("session_id")
      })
      .then(response => {
        let db_session_id = response?.data[0].session_id;

        if (db_session_id === session_id) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(error => console.log(error));

  }

  checksessionID();

  return (
    <div>
      <div className='container'>
        <BrowserRouter>
          <Suspense fallback={<Box><CircularProgress /></Box>}>
            <Routes>
              <Route
                path='/login'
                element={<PublicRoute><LoginPage /></PublicRoute>}
              />
              <Route
                path='/register'
                element={<PublicRoute><Register /></PublicRoute>}
              />
              {
                routes.map((route, idx) => (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<PrivateRoute>{ route.component }</PrivateRoute>}
                    exact={route.exact}
                  />
                ))
              }
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}
