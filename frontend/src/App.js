import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Notes from './Pages/Notes/Notes';


export default function App(){
    return (
        <div>
          <div className='container'>
                <BrowserRouter>
                    <Topbar />
                    <Sidebar />
                  <Routes>
                      <Route path="/notes" element={<Notes />} />
                  </Routes>
                </BrowserRouter>
          </div>
        </div>
    );
}
