import React, { useState, useEffect } from 'react'
import "./Customer.css";
import AddCustomerModal from '../../components/AddCustomerModal/AddCustomerModal';
import { Button } from '@mui/material';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Table from '../../components/Table/Table';
import axios from 'axios';
import Sidebar from '../../components/Sidebar/Sidebar';

function Customer() {
  const [dataRetrieved, setDataRetrieved] = useState([]);
  const [columns, setColumns] = useState([]);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showAddCustomerNote, setShowAddCustomerNote] = useState(false);

  const [data, setData] = useState({
    customer_name: "",
    dob: "",
    email: "",
    profit: "",
    acquisition_cost: ""
  });

  useEffect(() => {
    async function fetchData() {
      let request = await axios.get("http://localhost:3000/customers");
      setDataRetrieved(request.data);

      request.data?.length > 0 ? setColumns(Object
        .keys(request.data[0])
        .map(x => x.toUpperCase().replace(/_/g, " ")))
        : setColumns(["Customer Name",
          "DOB",
          "Email",
          "Profit",
          "Acquisiton Cost",
          "Date Created"]);
    }

    fetchData();
  }, []);

  const handleAddCustomerModal = (e) => {
    setShowCustomerModal(true);
  }

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

  const handleAddCustomer = (e) => {
    axios.post("http://localhost:3000/customers/create",
      {
        customer_name: data.customer_name,
        dob: data.dob,
        email: data.email,
        profit: data.profit,
        acq_cost: data.acquisition_cost
      })
      .then(response => {
        setShowCustomerModal(false);
        setShowAddCustomerNote(true);
      })
      .catch(error => console.log(error));
  }

  return (

    <div>
      <Sidebar />
      <Button
        onClick={handleAddCustomerModal}
        variant="contained"
      >
        Add Customer
      </Button>

      <AddCustomerModal
        showForm={showCustomerModal}
        setShowForm={setShowCustomerModal}
        handleAddCustomer={handleAddCustomer}
        states={setData}
      />

      <Table
        data={dataRetrieved}
        rowsPerPage={5}
        columns={columns}
      />

      <Modal open={showAddCustomerNote} className="add-customer-notification">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Notification
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Customer Has Been Added
          </Typography>
          <Button onClick={() => { window.location.reload() }}>Close</Button>
        </Box>
      </Modal>

    </div>
  )
}

export default Customer
