import React, { useState, useEffect, useRef } from 'react';
import "./Register.css";
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Alert from '@mui/material/Alert';

//https://sweetcode.io/creating-form-validations-with-react-hooks/
export default function Register() {

    const [inputs, setInputs]
   
    const timeout = (delay) => {
        return new Promise( res => setTimeout(res, delay) );
    }


    return (

        <div className='register-form-container'>
            <h1>Register Here</h1>
            <form className='register-form'>
                <label htmlFor="username">Username</label>
                <TextField
                    placeholder='Type your Username'
                    type="text"
                    name='username'
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                {
                    usernameError ?
                        <Alert 
                            severity="error" 
                            className='register-form__error-msg'
                        >
                            Please type in a username
                        </Alert> :
                        <div></div>
                }
                <label htmlFor="email">Email</label>
                <TextField
                    placeholder='Type your email'
                    type="email"
                    name='email'
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                {
                    emailError ?
                        <Alert 
                            severity="error" 
                            className='register-form__error-msg'
                        >
                            Please type in a valid email
                        </Alert> :
                        <div></div>
                }

                <label htmlFor="password">Password</label>

                <TextField
                    placeholder='Type your Password'
                    type="password"
                    name='password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                {
                    passwordError ?
                        <Alert severity="error" className='register-form__error-msg'>Please type in a password</Alert> :
                        <div></div>
                }
                <label htmlFor="confirm_password">Confirm Password</label>
                <TextField
                    placeholder='Retype your Password'
                    type="password"
                    name='confirm_password'
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    style={{ marginBottom: "10px" }}
                />
                {
                    confirmpasswordError ?
                        <Alert 
                            severity="error" 
                            className='register-form__error-msg'
                        >
                            Passwords do not match
                        </Alert> :
                        <div></div>
                }
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleRegisterBtn}
                    style={{ marginBottom: "10px" }}
                >
                    Submit to Register
                </Button>
                {
                    registerError ?
                        <Alert
                            severity="error"
                            className='register-form__error-msg'
                            style={{ marginBottom: "10px" }}
                        >
                            Could not process your account. Please try again
                        </Alert> :
                        <div></div>
                }

{
                    success ?
                        <Alert
                            severity="success"
                            className='register-form__success-msg'
                            style={{ marginBottom: "10px" }}
                        >
                            Account successfully created. You will be 
                            redirected back to the login page.
                        </Alert> :
                        <div></div>
                }
            </form>

          
            
            <div className='register-form__btn-group'>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleLoginBtn}
                >
                    Return back to Login
                </Button>
            </div>

            
        </div>

    )
}
