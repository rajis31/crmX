import React, { lazy, Suspense } from 'react';

const LoginPage = lazy(() => import('./components/Login/Login'));
const RegisterPage = lazy(() => import('./components/Register/Register'));
const ForgotPage = lazy(() => import('./components/Forgot/Forgot'));
const DashPage = lazy(() => import('./Pages/Dashboard/Dashboard'));
const NotesPage = lazy(() => import('./Pages/Notes/Notes'));
const CustomerPage = lazy(() => import('./Pages/Customer/Customer'));
const AccountPage = lazy(() => import('./Pages/Account/Account'));
const ReportsPage = lazy(() => import('./Pages/Reports/Reports'));


import PrivateRoute from './routes/PrivateRoute';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./style.css";

export default function App() {

  return (
    <div>
      <div className='container'>
        <Suspense fallback={<Box><CircularProgress /></Box>}>
          <PrivateRoute path="/login" type="public" > <LoginPage /> </PrivateRoute>
          <PrivateRoute path="/register" type="public" > <RegisterPage /> </PrivateRoute>
          <PrivateRoute path="/" type="private" > <DashPage /> </PrivateRoute>
          <PrivateRoute path="/forgot" type="public" > <ForgotPage /> </PrivateRoute>
          <PrivateRoute path="/notes" type="private" > <NotesPage /> </PrivateRoute>
          <PrivateRoute path="/customers" type="private" > <CustomerPage /> </PrivateRoute>
          <PrivateRoute path="/reports" type="private" > <ReportsPage /> </PrivateRoute>
          <PrivateRoute path="/account" type="private" > <AccountPage /> </PrivateRoute>          
        </Suspense>
      </div>
    </div>
  );
}
