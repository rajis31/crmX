import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Metricbar from '../../components/Metricbar/Metricbar';
import Barchart from '../../components/Charts/Barchart/Barchart';
import sampleData from '../../data/sampleData';

function Dashboard() {
  const data = sampleData();
  return (
    <>
       <Topbar />
       <Sidebar />
       <div>
         <Metricbar />
         <Barchart xAxisDataKey="name" barDataKey="profit" fill="#000" data={data} />
       </div>
    </>

  )
}

export default Dashboard
