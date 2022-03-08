import React, { useState } from 'react'
import "./Login.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Alert from '@mui/material/Alert';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();

    const handleErrors = () => {
        if (username.length === 0) {
            setUsernameError(true);
        } else if (password.length === 0) {
            setPasswordError(true);
        } else {
            clearErrors();
        }
    }

    const clearErrors = () => {
        setLoginError(false);
        setUsernameError(false);
        setLoginError(false);
    }


    const handleLoginBtn = async (e) => {
        handleErrors();

        if(!usernameError && !passwordError){
            axios.post("http://localhost:3000/user/login",
            {
                username: username,
                password: password
            })
            .then(response => {
                console.log(response);
                clearErrors();
            })
            .catch(error => setLoginError(true));
        }
    }

    const handleRegisterBtn = (e) => {
        navigate("register");
    }

    const handleForgotBtn = (e) => {
        navigate("forgot");
    }
    return (
        <div className='login-form-container'>
            <h1>login</h1>
            <form>
                <label htmlFor="username">username</label>
                <TextField
                    placeholder='Type your Username'
                    type="text"
                    name='username'
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                {
                    usernameError ?
                        <Alert severity="error" className='login-form__error-msg'>Please type your username in</Alert> :
                        <div></div>
                }
                <label htmlFor="password">password</label>
                <TextField
                    placeholder='Type your Password'
                    type="password"
                    name='password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                {
                    passwordError ?
                        <Alert severity="error" className='login-form__error-msg'>Please type your password in</Alert> :
                        <div></div>
                }

                {
                    loginError ?
                        <Alert severity="error" className='login-form__error-msg'>Could not login. Please try again</Alert> :
                        <div></div>
                }

            </form>
            <p className="forgot" onClick={() => { handleForgotBtn() }}>forgot password?</p>
            <div className='login-form__btn-group'>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLoginBtn}
                >
                    Login Here
                </Button>

                <Button
                    variant="contained"
                    color="success"
                    onClick={handleRegisterBtn}
                >
                    Register Here
                </Button>
            </div>

            <div className="social">
                <FacebookIcon className='social-icon' />
                <TwitterIcon className='social-icon' />
                <GoogleIcon className='social-icon' />
            </div>
        </div>

    )
}
