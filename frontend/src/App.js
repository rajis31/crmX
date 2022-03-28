import React, { useState, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from './routes/PublicRoute';
import ProtectedRoutes from './routes/ProtectedRoutes';

const LoginPage = lazy(() => import('./components/Login/Login'));
const Register = lazy(() => import('./components/Register/Register'));
const ForgotPassword = lazy(() => import('./components/Forgot/Forgot'));

import routes from './routes/Routes';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function App() {

  return (
    <div>
      <div className='container'>
        <BrowserRouter>
          <Suspense fallback={<Box><CircularProgress /></Box>}>
            <Routes>
              <Route
                path='/login'
                element={<PublicRoute><LoginPage /></PublicRoute>}
                exact
              />
              <Route
                path='/register'
                element={<PublicRoute><Register /></PublicRoute>}
                exact
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}
