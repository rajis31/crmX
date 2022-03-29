import React from 'react'
import "./Login.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, TextField } from '@mui/material';
import { useLocation } from 'wouter';
import Alert from '@mui/material/Alert';
import formHook from './FormHook';
import validate from './Validate';


export default function Login() {
    const inputValues = {username: "", password: ""};
    const { handleInputChange, handleLogin,errors,success } = formHook(inputValues, validate);
    const [location, setLocation] = useLocation();

  
    const handleRegisterBtn = (e) => {
        setLocation("/register");
    }

    const handleForgotBtn = (e) => {
        setLocation("/forgot");
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
                    onChange={handleInputChange}
                />
                {
                    errors.usernameError ?
                        <Alert 
                            severity="error" 
                            className='login-form__error-msg'
                            >
                            Please type your username in
                        </Alert> :
                        <></>
                }
                <label htmlFor="password">password</label>
                <TextField
                    placeholder='Type your Password'
                    type="password"
                    name='password'
                    onChange={handleInputChange}
                />
                {
                    errors.passwordError ?
                        <Alert 
                            severity="error" 
                            className='login-form__error-msg'
                        >
                            Please type your password in
                        </Alert> :
                        <></>
                }

                {
                    success === false ?
                        <Alert 
                            severity="error" 
                            className='login-form__error-msg'
                        >
                            Could not login. Please try again
                        </Alert> :
                        <></>
                }

            </form>
            <p className="forgot" onClick={() => { handleForgotBtn() }}>forgot password?</p>
            <div className='login-form__btn-group'>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLogin}
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
