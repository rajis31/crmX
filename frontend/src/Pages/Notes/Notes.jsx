import React from 'react';
import "./Notes.css";
import DataTable from '../../components/DataTable/DataTable';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';

export default function Notes() {
  return (
    <div className="notes">
        <Topbar />
        <Sidebar />
        <DataTable />
    </div>
  )
}
