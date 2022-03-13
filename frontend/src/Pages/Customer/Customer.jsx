import React, { useState, useEffect } from 'react'
import "./Customer.css";
import AddCustomerModal from '../../components/AddCustomerModal/AddCustomerModal';
import { Button } from '@mui/material';

function Customer() {
    const [showCustomerModal, setShowCustomerModal] = useState(false);
    const [data, setData] = useState({
                                      customer_name: "", 
                                      date_of_birth: "", 
                                      email: "", 
                                      profit: "", 
                                      acquisition_cost: ""
                                    });

    const handleAddCustomerModal = (e) => {
        setShowCustomerModal(true);
    }

    const handleAddCustomer = (e) => {
        console.log(data);
    }

    return (

        <div>
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
        </div>
    )
}

export default Customer