import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';


function Dashboard() {
  return (
    <>
       <Sidebar />
       <Topbar />
       <div>Dashboard</div>
    </>

  )
}

export default Dashboard