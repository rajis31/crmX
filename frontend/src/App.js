import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';

export default function App(){
    return (
        <div>
          <Topbar />
          <Sidebar />
          <div className='container'>
                
          </div>
        </div>
    );
}
