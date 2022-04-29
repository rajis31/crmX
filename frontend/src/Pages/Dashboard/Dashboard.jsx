import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Metricbar from '../../components/Metricbar/Metricbar';
import Barchart from '../../components/Charts/Barchart/Barchart';
import Linechart from '../../components/Charts/Linechart/Linechart';
import axios from "axios";
import { getCookie, generateUrl } from "../../Helpers/Helpers";


function Dashboard() {

  const [topCustomers, setTopCustomers] = useState([]);
  const [cumulativeCustomer, setCumulativeCustomer] = useState([]);
  const [dataMax, setDataMax] = useState(0);


  useEffect(async () => {
    let session_id = getCookie('session_id');
    let data = await axios.get(generateUrl("stats/get_top_customers/" + session_id));
    data.data.length > 0 ? setDataMax(Math.max.apply(Math, data.data.map(e=>e.profit))) 
                           : setDataMax(100);
    setTopCustomers(data.data);

    data = await axios.get(generateUrl("stats/get_cumulative_customer_total/" + session_id));
    setCumulativeCustomer(data.data);
  }, []);


  return (
    <>
      <Topbar />
      <Sidebar />
      <div>
        <Metricbar />
        <div className='charts'>
          <div className='chart'>
            <Barchart
              xAxisDataKey="customer_name"
              barDataKey="profit"
              fill="#4361ee"
              data={topCustomers}
              title="Top 5 Customers"
              dataMax={dataMax}
            />
          </div>

          <div className='chart'>
            <Linechart
              data={cumulativeCustomer}
              xAxisDataKey="day"
              lineKey="Cumulative Total"
              lineColor="#000"
              title="Total Customers Added (Past 30 days)"
            />
          </div>
        </div>

      </div>
    </>

  )
}

export default Dashboard
