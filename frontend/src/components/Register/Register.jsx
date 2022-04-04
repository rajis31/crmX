import React from 'react';
import "./Register.css";
import { TextField, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import formHook from './FormHook';
import validate from "./Validate";


export default function Register() {

    const { handleRegistration, handleInputChange, handleLogin, errors, success } = formHook(
        {
            username: "",
            password: "",
            confirm_password: "",
            email: ""
        }, validate
    );


    return (

        <div className='register-form-container'>
            <h1>Register Here</h1>
            <form className='register-form'>
                <label htmlFor="username">Username</label>
                <TextField
                    placeholder='Type your Username'
                    type="text"
                    name='username'
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                {
                    errors.usernameError ?
                        <Alert
                            severity="error"
                            className='register-form__error-msg'
                        >
                            Please type in a username
                        </Alert> :
                        <></>
                }

                {
                    errors.userNameCheckError ?
                        <Alert
                            severity="error"
                            className='register-form__error-msg'
                        >
                            Username Exists. Please try again
                        </Alert> :
                        <></>
                }
                <label htmlFor="email">Email</label>
                <TextField
                    placeholder='Type your email'
                    type="email"
                    name='email'
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                {
                    errors.emailError ?
                        <Alert
                            severity="error"
                            className='register-form__error-msg'
                        >
                            Please type in a valid email
                        </Alert> :
                        <></>
                }

                <label htmlFor="password">Password</label>

                <TextField
                    placeholder='Type your Password'
                    type="password"
                    name='password'
                    onChange={handleInputChange}
                    autoComplete="off"
                />
                {
                    errors.passwordError ?
                        <Alert severity="error" className='register-form__error-msg'>Please type in a password</Alert> :
                        <></>
                }
                <label htmlFor="confirm_password">Confirm Password</label>
                <TextField
                    placeholder='Retype your Password'
                    type="password"
                    name='confirm_password'
                    onChange={handleInputChange}
                    style={{ marginBottom: "10px" }}
                    autoComplete="off"
                />
                {
                    errors.confirmpasswordError ?
                        <Alert
                            severity="error"
                            className='register-form__error-msg'
                        >
                            Passwords do not match
                        </Alert> :
                        <></>
                }
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleRegistration}
                    style={{ marginBottom: "10px" }}
                >
                    Submit to Register
                </Button>
                {
                    errors.registerError ?
                        <Alert
                            severity="error"
                            className='register-form__error-msg'
                            style={{ marginBottom: "10px" }}
                        >
                            Could not process your account. Please try again
                        </Alert> :
                        <></>
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
                        <></>
                }
            </form>



            <div className='register-form__btn-group'>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleLogin}
                >
                    Return back to Login
                </Button>
            </div>


        </div>

    )
}
