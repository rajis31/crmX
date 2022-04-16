import React, {useState} from 'react'
import "./Login.css";
import { Button, TextField} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'wouter';
import Alert from '@mui/material/Alert';
import formHook from './FormHook';
import validate from './Validate';


export default function Login() {
    const inputValues = { username: "", password: "" };
    const { handleInputChange, handleLogin, errors, success } = formHook(inputValues, validate);
    const [location, setLocation] = useLocation();
    const [showInfo,setShowInfo] = useState(false);

    const handleRegisterBtn = (e) => {
        setLocation("/register");
    }

    const handleForgotBtn = (e) => {
        setLocation("/forgot");
    }
    const showCookieMessage = (e) => {
        setShowInfo(true);
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

          
            <div className='more-info' onClick={showCookieMessage}>
                    <HelpOutlineIcon />
            </div>

                { showInfo ? 
                (
                     <div className='show-info'>
                        <CloseIcon 
                            style={{color: "#fff"}}
                            className="close-icon"
                            onClick={e => setShowInfo(false)}
                        />
                        <a 
                            className='show-info__link' 
                            href='https://www.dev-top.com'
                            >
                                Created by Raj Solanki 
                                <br />
                                (https//www.dev-top.com)
                        </a>
                        <br />
                        <p
                            style={{color: "white"}}
                        >
                            This site uses cookies
                        </p>
                    </div>
                ) :<></>}

        </div>
    )
}
