import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Metricbar from '../../components/Metricbar/Metricbar';

function Dashboard() {
  return (
    <>
       <Topbar />
       <Sidebar />
       <div>
         <Metricbar />
       </div>
    </>

  )
}

export default Dashboard
