import React, { useState, useEffect } from 'react';
import "./Account.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import { Typography, Button } from '@mui/material';
import { Alert } from '@mui/material';
import { Snackbar } from '@mui/material';
import axios from 'axios';
import { getCookie } from "../../Helpers/Helpers";

function Account() {
    const [img, setImg] = useState();
    const [imgSizeNotification, setimgSizeNotification] = useState(false);

    const handleAccountSubmit = async (e) => {
        const data = new FormData();
        const session_id = getCookie("session_id");

        data.append("session_id", session_id);
        data.append("image", img);

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        axios.post("http://localhost:3000/user/update", data, config)
            .then((res) => { console.log(res); })
            .catch((err) => { console.log(err) });
    }


    const handleCloseImgSizeNotification = (e) => {
        setimgSizeNotification(false);
    }

    const handleImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];

            let _URL = window.URL || window.webkitURL;
            const new_img = new Image();
            let objectUrl = _URL.createObjectURL(img);

            new_img.onload = function () {
                if (this.height > 400 && this.width > 400) {
                    console.log("Image size exceeds 400x400");
                }

                if (img.size <= 1000000) {
                    setImg(img);
                } else {
                    setimgSizeNotification(true);
                }
                _URL.revokeObjectURL(objectUrl);
            };
            new_img.src = objectUrl;
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
                        <label htmlFor='profile_image'>
                            Profile Image
                            <br />
                            <span
                                style={{
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    paddingTop: "10px"
                                }}
                            >
                                (Image size must be less then 2 mb)
                            </span>
                        </label>
                        <input
                            accept="image/png, image/gif, image/jpeg"
                            name='image'
                            type="file"
                            onChange={handleImgChange}
                            style={{ marginBottom: "1rem" }}
                        />

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
