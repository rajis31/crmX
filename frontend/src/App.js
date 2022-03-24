import React from 'react';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Notes from './Pages/Notes/Notes';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import Customer from './Pages/Customer/Customer';
import Account from './Pages/Account/Account';
import Forgot from './components/Forgot/Forgot';
import { getCookie } from './Helpers/Helpers';
import axios from 'axios';

export default function App(){
  const checksessionID = () => {
    const sessionID = getCookie("session_id");
      axios.post("http://localhost:3000/user/check_session_id",
      {
          session_id: getCookie("session_id")
      })
      .then(response => {
          console.log(response);
      })
      .catch(error => console.log(error));

    console.log(sessionID);
  }

  checksessionID();

    return (
        <div>
          <div className='container'>
                <BrowserRouter>
                  <Routes>
                      <Route path="/" element={< Dashboard />}/>
                      <Route path="/login" element={< Login />}/>
                      <Route path="/notes" element={<Notes />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/forgot" element={<Forgot />} />
                      <Route path="/customer" element={<Customer />} />
                      <Route path="/Account" element={<Account />} />
                  </Routes>
                </BrowserRouter>
          </div>
        </div>
    );
}
