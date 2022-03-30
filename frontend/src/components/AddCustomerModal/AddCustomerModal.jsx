import React from 'react'
import "./AddCustomerModal.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const AddCustomerModal = ({ showForm, setShowForm, handleAddCustomer, states }) => {
    return (
        <Modal open={showForm} className="add-customer-modal">
            <Box>
                <Typography
                    align='center'
                    className='add-customer-modal__title'
                    style={{ fontSize: 20, fontWeight: 500, paddingTop: 20 }}
                >
                    Add Customer
                </Typography>
                <form className='add-customer-form'>
                    <label htmlFor="customer_name">Customer Name</label>
                    <input 
                        type="text" 
                        name='customer_name' 
                        placeholder='Customer Name' 
                        onChange={ (e) => {
                            states( (prevState) => ({...prevState, [e.target.name]: e.target.value}))}
                        }
                    />

                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                        type="date" 
                        name='dob' 
                        onChange={ (e) => {
                            states( (prevState) => ({...prevState, [e.target.name]: e.target.value}))}
                        }
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Email' 
                        onChange={ (e) => {
                            states( (prevState) => ({...prevState, [e.target.name]: e.target.value}))}
                        }
                    />

                    <label htmlFor="profit">Projected Profit</label>
                    <input 
                        type="number" 
                        name='profit' 
                        placeholder='Profit' 
                        onChange={ (e) => {
                            states( (prevState) => ({...prevState, [e.target.name]: e.target.value}))}
                        }
                    />

                    <label htmlFor="acquisition_cost">Acquistition Cost</label>
                    <input
                         type="number" 
                         name='acquisition_cost' 
                         placeholder='Acquisition Cost' 
                         onChange={ (e) => {
                            states( (prevState) => ({...prevState, [e.target.name]: e.target.value}))}
                        }
                        style={{marginBottom: "10px"}}
                    />

                    <div className='form-button-group'>
                        <Button onClick={handleAddCustomer} variant="contained">Add Customer</Button>
                        <Button onClick={() => { setShowForm(false) }}>Close</Button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

export default AddCustomerModal;