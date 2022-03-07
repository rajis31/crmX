import React from 'react';
import "./DataTable.css";
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { TableHead } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import axios from "axios";

function DataTable(props) {
  const [rows, setRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAddForm, setShowAddModal] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    fontSize: 14,
    bgcolor: '#fff',
    color: "#000",
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
  };

  const cols = [
    { id: "id", label: "ID" },
    { id: "title", label: "Title" },
    { id: "body", label: "Summary" },
    { id: "date_created", label: "Date Created" },
    { id: "delete", label: "Delete" },
  ];

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:3000/notes");
      setRows(request.data);
    }
    fetchData();
  }, []);

  async function deleteRow(id) {
    axios.post("http://localhost:3000/notes/delete", { id: id })
      .then(response => {
        console.log(response);
        let filteredData = rows.filter(row => row.id !== id);
        setRows(filteredData);
        setShowModal(true);
      })
      .catch(error => console.log(error));
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddCustomerForm = (e) => {
    setShowAddModal(true);
  }

  return (
    
      <div className='container'>
      { rows.length > 0  ? 
       (<>
          <Button 
            variant="contained" 
            onClick={handleAddCustomerForm}
          >
            Add Note
          </Button>
         <TableContainer style={{width: "600px"}}>
        <Table>
          <TableHead>
            <TableRow>
              {cols.map((column) => (
                <TableCell
                  key={column.id}
                  align="center"
                  style={{ fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {
              rows.map(row => (
                <TableRow key={row.id}>
                  {cols.map(col => (
                    <TableCell key={col.id}>
                      {
                        col.id === "body" ? row[col.id].substring(0, 100) :
                          col.id === "delete" ? <Button startIcon={< DeleteIcon />} onClick={() => deleteRow(row.id)} >Delete</Button> :
                            row[col.id]
                      }
                    </TableCell>
                  ))}

                </TableRow>
              ))
            }
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={6}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
    
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>


      <Modal open={showModal} className="delete-customer-notification">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Notification
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Customer Has Been Deleted
          </Typography>
          <Button onClick={() => { setShowModal(false) }}>Close</Button>
        </Box>
      </Modal>
       </>)  : 

    <div>
      <Button 
        variant="contained" 
        onClick={handleAddCustomerForm}
      >
        Add Note
      </Button>
      <p>No Data available </p>
    </div> 
    }
              
      <Modal open={showAddForm} className="add-customer-form">
        <Box sx={style}>
          <Typography align='center'>Add Note</Typography>
          <form className='add-note-form'>
               <TextField 
                    label="Title" 
                    variant="outlined" 
                    style={{marginTop: 20}}
                  />
               <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Enter Note Here"
                    style={{ width: 200, marginTop: 20 }}
              />
              <div className='form-button-group'>
                 <Button onClick={() => { setShowAddModal(false) }}>Add Note</Button>
                 <Button onClick={() => { setShowAddModal(false) }}>Close</Button>
              </div>
          </form>
        </Box>
      </Modal> 

    </div>

  )

}

export default DataTable;
