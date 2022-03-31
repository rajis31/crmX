import React from 'react';
import axios from "axios";
import { Button, Typography } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import { getCookie, generateUrl } from "../../Helpers/Helpers"

function Reports() {
  const NotesReport = () => {
    axios({
      url:  generateUrl("notes/report/"+ getCookie("session_id")) ,
      method: 'GET',
      responseType: 'blob'

    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Notes.csv');
      document.body.appendChild(link);
      link.click();
    });
  }

  const CustomersReport = () => {
    axios({
      url:  generateUrl("customers/report/"+ getCookie("session_id")) ,
      method: 'GET',
      responseType: 'blob',

    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Customers.csv');
      document.body.appendChild(link);
      link.click();
    });
  }

  return (
    <div>
      <Sidebar />
      <Typography
        variant='h4'
        style={{ marginLeft: "80px" }}
      >
        Generate Reports
      </Typography>
      <Button
        onClick={NotesReport}
        variant="contained"
        style={{ marginLeft: "80px", marginTop: "20px" }}
      >
        Get all Notes
      </Button>
      <br />
      <Button
        onClick={CustomersReport}
        variant="contained"
        style={{ marginLeft: "80px", marginTop: "20px" }}
      >
        Get all Customers
      </Button>
    </div>
  )
}

export default Reports
