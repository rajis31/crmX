import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Metricbar from '../../components/Metricbar/Metricbar';
import Barchart from '../../components/Charts/Barchart/Barchart';
import sampleData from '../../data/sampleData';
import axios from "axios";

function Dashboard() {


  let data = sampleData();
  
  data = data?.map(e => {
    e.name = e.name.toUpperCase()
    return e;
  });

  return (
    <>
      <Topbar />
      <Sidebar />
      <div>
        <Metricbar />
        <Barchart
          xAxisDataKey="name"
          barDataKey="profit"
          fill="#4361ee"
          data={data}
          title={"Top 5 Customers"}
        />
      </div>
    </>

  )
}

export default Dashboard
