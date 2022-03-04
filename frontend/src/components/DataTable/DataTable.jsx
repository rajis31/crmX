import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { TableHead } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from "axios";

function DataTable(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get('http://localhost:3000/notes/')
        setRows(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  
    return (
      <>
      </>
  )
  
}

export default DataTable;
