import React from 'react';
import "./Sidebar.css";

import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotesIcon from '@mui/icons-material/Notes';
import HomeIcon from '@mui/icons-material/Home';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'wouter';

export default function Sidebar() {
  const [location, setLocation] = useLocation();

  const handleRoute = (name) => {
    setLocation("/"+name);
  }
  return (
    <div className="sidebar">
      <ul>
        <li className='active' name="home" onClick={ e=> {handleRoute("")}}>
          <HomeIcon className="sidebar__icon" />
          Home
        </li>
        <li name="customer" onClick={ e=> {handleRoute("customer")}}>
          <PersonIcon className="sidebar__icon" />
          Customers
        </li>
        <li name="note" onClick={ e=> {handleRoute("notes")}}>
          <NotesIcon className="sidebar__icon" />
          Notes
        </li>
        <li name="report" onClick={ e=> {handleRoute("reports")}}>
          <BarChartIcon className="sidebar__icon" />
          Reports
        </li>
        <li className='sidebar__icon' name="account"  onClick={ e=> {handleRoute("account")}}>
          <AccountCircleIcon />
          Account
        </li>
        <li className='sidebar__icon active'>
          <BlurLinearIcon />
        </li>
      </ul>

    </div>
  )
}
