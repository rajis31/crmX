import React, {useEffect, useState} from "react";
import "./Topbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";
import { useLocation } from "wouter";
import { getCookie, deleteCookie, generateUrl } from "../../Helpers/Helpers";


export default function Topbar() {

  const [location, setLocation] = useLocation();
  const [img, setImg] = useState("");

  useEffect(()=>{
    axios.post(generateUrl("user/retrieve_image_path"),
    {
        session_id: getCookie("session_id")
    })
    .then(response => {
        if (response.status === 200) {
          setImg("../../../"+response.data[0]?.img_path);
        }
    })
    .catch(error => { console.log(error);  });
  },[]);

  const handleLogout = (e) => {
    let session_id = getCookie("session_id");
    axios.post(generateUrl("user/logout"),{ session_id: session_id })
         .then(response => {
              if(response.status === 200){
                 deleteCookie("session_id");
                 setLocation("/login");
              }
         })
  }

  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className="topLeft">
                <span className="logo">CRM</span>
            </div>
            <div className="topRight">
                <img  src={ img }  alt="" className="topAvatar" />
                <LogoutIcon  className="topLogout" onClick={handleLogout} />
            </div>
        </div>
    </div>
  )
}

