import React from 'react';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Notes from './Pages/Notes/Notes';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';

export default function App(){
    return (
        <div>
          <div className='container'>
                <BrowserRouter>
                  <Routes>
                      <Route path="/login" element={< Login />}/>
                      <Route path="/notes" element={<Notes />} />
                      <Route path="/register" element={<Register />} />
                  </Routes>
                </BrowserRouter>
          </div>
        </div>
    );
}
