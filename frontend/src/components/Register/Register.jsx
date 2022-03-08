import React, { useState } from 'react';
import "./Register.css";
import { TextField, Button } from '@mui/material';
import { useNavigate as navigate } from 'react-router-dom';
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
        setUsernameError(false);
        setPasswordError(false);
        setConfirmpasswordError(false);
        setEmailError(false);
    }

    const handleRegisterBtn = () => {
        handleErrors();

        if (!(usernameError || passwordError || confirmpasswordError || emailError)) {
            if (!usernameError && !passwordError) {
                axios.post("http://localhost:3000/user/register",
                    {
                        username: username,
                        password: password,
                        email:    email
                    })
                    .then(response => {
                        console.log(response);
                        clearErrors();
                    })
                    .catch(error => setRegisterError(true));
            }
        }
    }


    return (

        <div className='register-form-container'>
            <h1>Register Here</h1>
            <form className='register-form'>
                <label for="username">Username</label>
                <TextField
                    placeholder='Type your Username'
                    type="text"
                    name='username'
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                {
                    usernameError ?
                        <Alert severity="error" className='register-form__error-msg'>Please type in a username</Alert> :
                        <div></div>
                }
                <label for="email">Confirm Password</label>
                <TextField
                    placeholder='Type your email'
                    type="email"
                    name='email'
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                {
                    emailError ?
                        <Alert severity="error" className='register-form__error-msg'>Please type in a valid email</Alert> :
                        <div></div>
                }

                <label for="password">password</label>

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
                <label for="password">Confirm Password</label>
                <TextField
                    placeholder='Retype your Password'
                    type="password"
                    name='confirm_password'
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
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
                >
                    Submit to Register
                </Button>
                {
                    registerError ?
                        <Alert severity="error" className='register-form__error-msg'>Could not process your account. Please try again</Alert> :
                        <div></div>
                }
            </form>
            <div className='register-form__btn-group'>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLoginBtn}
                >
                    Return back to Login
                </Button>
            </div>
        </div>

    )
}
