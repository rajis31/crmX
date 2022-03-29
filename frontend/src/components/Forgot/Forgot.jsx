import React, { useState } from 'react';

import "./Forgot.css";
import { Button, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useLocation } from "wouter";


function Forgot() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState("");
    const [success, setSuccess] = useState();
    const [location, setLocation] = useLocation();


    const handleLogin = (e) => {
        setLocation("/login");
    }

    const handleUsername = (e) => {
        axios.post("http://localhost:3000/user/check_username",
            {
                username: username,
            })
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    response.data?.found ? setShowPassword(true) : setShowPassword(false);
                }
            })
            .catch(error => { setSuccess(false) });
    }
    const handleSubmit = (e) => {
        axios.post("http://localhost:3000/user/forgot_password",
            {
                username: username,
                password: password
            })
            .then(response => {
                if (response.status === 200) {
                   setLocation("/login");
                }
            })
            .catch(error => { setSuccess(false) });
    }

    return (
        <div className='forgot-form-container'>
            <h1>Forgot</h1>
            <form className='forgot-form'>
                <label htmlFor="username">Username</label>
                <TextField
                    placeholder='Type your Username'
                    type="text"
                    name='username'
                    style={{width: "100%"}}
                    onChange={e => { setUsername(e.target.value); }}
                />
                {
                    showPassword === "" ? (
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleUsername}
                            style={{ width: 150, marginTop: 12 }}
                        >
                            Next
                        </Button>
                    ) : <></>
                }

                {showPassword ? (
                    <>
                        <label htmlFor="password">Password</label>
                        <TextField
                            placeholder='Type your new Password'
                            type="password"
                            name='password'
                            style={{width: "100%"}}
                            onChange={e => { setPassword(e.target.value); }}
                        />
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleSubmit}
                            style={{ width: 150, marginTop: 12 }}
                        >
                            Submit
                        </Button>
                    </>
                ) : ""
                }

                {showPassword === false ? (
                    <>
                        <Alert 
                            severity="error"
                            style={{marginTop: 12}}
                        
                        >
                            Username does not exist !
                        </Alert>
                    </>
                ) : ""
                }

            </form>
            {success === false ? (
                    <>
                        <Alert 
                            severity="error"
                            style={{marginTop: 12}}
                        
                        >
                            Cannot update password. Try again
                        </Alert>
                    </>
                ) : ""
                }
            <div className='form-form__btn-group'>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLogin}
                    style={{ width: 250, marginTop: 12 }}
                >
                    Go back to Login
                </Button>
            </div>
        </div>
    )
}

export default Forgot
