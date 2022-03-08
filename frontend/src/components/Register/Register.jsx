import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate as navigate } from 'react-router-dom';
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");


    return (

        <div className='register-form-container'>
            <h1>Register Here</h1>
            <form>
                <label for="username">Username</label>
                <TextField
                    placeholder='Type your Username'
                    type="text"
                    name='username'
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <label for="password">Confirm Password</label>
                <TextField
                    placeholder='Type your email'
                    type="email"
                    name='email'
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <label for="password">password</label>
                <TextField
                    placeholder='Type your Password'
                    type="password"
                    name='password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <label for="password">Confirm Password</label>
                <TextField
                    placeholder='Retype your Password'
                    type="password"
                    name='confirm_password'
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleRegisterBtn}
                >
                    Submit to Register
                </Button>
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
