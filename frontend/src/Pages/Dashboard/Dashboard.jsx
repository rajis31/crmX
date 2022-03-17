import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Metricbar from '../../components/Metricbar/Metricbar';
import Barchart from '../../components/Charts/Barchart/Barchart';
import axios from "axios";

function Dashboard() {

  const [data, setData] = useState([]);
  

  useEffect(async ()=>{
      let data = await axios.get("http://localhost:3000/stats/get_top_customers");
      setData(data.data);
  },[]);



  return (
    <>
      <Topbar />
      <Sidebar />
      <div>
        <Metricbar />
        <Barchart
          xAxisDataKey="customer_name"
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
