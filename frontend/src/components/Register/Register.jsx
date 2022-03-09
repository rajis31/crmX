import React, { useState, useEffect, useRef } from 'react';
import "./Register.css";
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Alert from '@mui/material/Alert';


export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [confirmpasswordError, setConfirmpasswordError] = useState(false);
    const [registerError, setRegisterError] = useState(false);

    const [submit, setSubmit] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const firstRender = useRef(true);

    const timeout = (delay) => {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false;
            return;
        }
        handleErrors();
    },[submit], ()=>{
        if (!(usernameError || passwordError || confirmpasswordError || emailError)) {
            axios.post("http://localhost:3000/user/register",
                {
                    username: username,
                    password: password,
                    email: email
                })
                .then(async (response) =>  {
                    clearErrors();
                    setRegisterError(false);
                    setSuccess(true);
                    await timeout(5000);
                    navigate("../login");
                })
                .catch(error => setRegisterError(true));
        }
    });

    const handleErrors = () => {
        if (username.length === 0) {
            setUsernameError(true);
        }
        if (password.length === 0) {
            setPasswordError(true);
        }
        if (password !== confirm_password) {
            setConfirmpasswordError(true);
        }
        if (email.length === 0) {
            setEmailError(true);
        }
    }

    const clearErrors = () => {
        if (username.length > 0) {
            setUsernameError(false);
        }

        if (password.length > 0) {
            setPasswordError(false);
        }

        if (email.length > 0) {
            setEmailError(false);
        }

        if (password === confirm_password) {
            setConfirmpasswordError(false);
        }
    }

    const handleRegisterBtn = () => {
        setSubmit(true);
    }

    const handleLoginBtn = () => {
        navigate("login");
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
                        <Alert severity="error" className='register-form__error-msg'>Passwords do not match</Alert> :
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
