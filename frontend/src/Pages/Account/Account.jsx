import React, { useState, useEffect } from 'react';
import "./Account.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import { TextField, Typography, Button } from '@mui/material';
import { Alert } from '@mui/material';
import { Snackbar } from '@mui/material';
import axios from 'axios';

function Account() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState();
    const [imgSizeNotification, setimgSizeNotification] = useState(false);

    useEffect(()=>{

    },[]);

    const handleAccountSubmit = async (e) => {
        const data = new FormData();
        data.append("username", username);
        data.append("name", name);
        data.append("image", img);

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        axios.post("http://localhost:3000/user/update",data, config)
             .then((res)=>{ console.log(res); })
             .catch((err)=>{ console.log(err) });
    }


    const handleCloseImgSizeNotification = (e) => {
        setimgSizeNotification(false);
    }

    const handleImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            if (img.size <= 1000000) {
                setImg(img);
            } else {
                setimgSizeNotification(true);
            }
        }       
    }

    return (
        <>
            <Sidebar />
            <div className='account-container'>
                <Typography variant='h4' className='account-container__title'>
                    Update User Profile
                </Typography>
                <div className='account-container__form-section' userid="1" >
                    <form className='account-container__form'>
                        <label htmlFor='name'>First Name</label>
                        <TextField
                            placeholder='Name'
                            name='name'
                            onChange={(e) => { setName(e.target.value);  }}
                        />
                        <label htmlFor='username'>Username</label>
                        <TextField
                            placeholder='Username'
                            name='username'
                            onChange={(e) => { setUsername(e.target.value);  }}
                        />
                        <label htmlFor='profile_image'>
                            Profile Image
                            <br />
                            <span 
                                style={{
                                        fontSize: "14px", 
                                        fontWeight:500,
                                        paddingTop: "10px"  
                                    }}
                            >
                            (Image size must be less then 2 mb)
                            </span>
                        </label>
                        <input
                            accept="image/png, image/gif, image/jpeg"
                            id="raised-button-file"
                            name='image'
                            type="file"
                            onChange={ handleImgChange }
                        />
                        {/* <label htmlFor="raised-button-file">
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label> */}
                        <Button 
                            variant="contained"
                            onClick={handleAccountSubmit}
                        >
                            Submit
                        </Button>
                    </form>
                    <Snackbar
                        open={imgSizeNotification}
                        onClick={handleCloseImgSizeNotification}
                    >
                        <Alert
                            severity='error'
                        >
                            Image Size is bigger then 2mb
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </>
    )
}

export default Account
