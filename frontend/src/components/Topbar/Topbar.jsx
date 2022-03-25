import React, {useEffect, useState} from "react";
import "./Topbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";

export default function Topbar() {
  const [img, setImg] = useState("");
  useEffect(()=>{
    axios.post("http://localhost:3000/user/retrieve_image_path",
    {
        username: "test"
    })
    .then(response => {
        console.log(response);
        if (response.status === 200) {
          setImg("../../../"+response.data[0]?.img_path);
        }
    })
    .catch(error => { console.log(error);  });
  },[]);

  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className="topLeft">
                <span className="logo">CRM</span>
            </div>
            <div className="topRight">
                <img  src={ img }  alt="" className="topAvatar" />
                <LogoutIcon  className="topLogout" />
            </div>
        </div>
    </div>
  )
}

