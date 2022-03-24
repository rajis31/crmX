import React from 'react';
import axios from "axios";
import { Button } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';

function Reports() {
  const handleReportGeneration = ()=>{
    axios({
        url: 'http://localhost:3000/notes/report',
        method: 'GET',
        responseType: 'blob', 
    },{
      params: {
        username: "raji"
      }
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.csv'); 
        document.body.appendChild(link);
        link.click();
    });
  }
  return (
    <div>
        <Sidebar />
        <Button onClick={handleReportGeneration}>Get all Notes</Button>
    </div>
  )
}

export default Reports
