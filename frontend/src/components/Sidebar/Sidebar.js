import React from 'react';
import "./Sidebar.css";


import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotesIcon from '@mui/icons-material/Notes';
import HomeIcon from '@mui/icons-material/Home';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
      <li className='active'>
          <HomeIcon className="sidebar__icon"/>
          Home
        </li>
        <li>
          <PersonIcon className="sidebar__icon"/>
          Customers
        </li>
        <li>
          <NotesIcon className="sidebar__icon"/>
          Notes
          
        </li>
        <li>
          <BarChartIcon className="sidebar__icon"/>
          Reports
        </li>
        <li className='sidebar__icon active'>
          <BlurLinearIcon />
        </li>

      </ul>
 
    </div>
  )
}
