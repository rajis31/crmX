import React, { lazy, Suspense } from 'react';
const LoginPage = lazy(() => import('./components/Login/Login'));
const RegisterPage = lazy(() => import('./components/Register/Register'));
const ForgotPage = lazy(() => import('./components/Forgot/Forgot'));
const DashPage = lazy(() => import('./Pages/Dashboard/Dashboard'));
import routes from "./routes/Routes";

import PrivateRoute from './routes/PrivateRoute';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function App() {

  return (
    <div>
      <div className='container'>
        <Suspense fallback={<Box><CircularProgress /></Box>}>
          <PrivateRoute path="/login" type="public" > <LoginPage /> </PrivateRoute>
          <PrivateRoute path="/" type="private" > <DashPage /> </PrivateRoute>
        </Suspense>
      </div>
    </div>
  );
}
