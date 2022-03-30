import React, { useState, useEffect } from "react";
import "./Table.css";
import TableFooter from "./TableFooter";
import { Typography } from '@mui/material';


const Table = ({ data, rowsPerPage, columns }) => {

  const [page, setPage] = useState(1);
  const [tableRange, setTableRange] = useState([]);
  const [slice, setSlice] = useState([]);

  const pageRange = (data, rowsPerPage) => {
    const range = [];
    const numPages = Math.ceil(data.length / rowsPerPage);

    for (let i = 1; i <= numPages; i++) {
      range.push(i);
    }

    return range;
  }

  const sliceData = (data, rowsPerPage, page) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  }

  useEffect(() => {
    setSlice(sliceData(data, rowsPerPage, page));
  }, [page, data]);

  useEffect(() => {
    setTableRange(pageRange(data, rowsPerPage));
  }, [data]);

  
  return (
    slice?.length > 0 ?
      <>
        <table className="table">
          <thead className="tableRowHeader">
            <tr>
              {
                columns.map((col, idx) => (
                  <th className="tableHeader" key={idx} >{col}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              slice.map((datum, idx2) => {
                let values = Object.values(datum);

                return (
                  <tr key={idx2} className="tableRowItems">
                    {values.map((val, idx) => (<td key={idx} className="tableCell">{val}</td>))}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <TableFooter
          tableRange={tableRange}
          setPage={setPage}
          page={page}
          slice={slice}
        />

      </> :
      <>
        <Typography variant="h4" className="customer__no-data" >
          No Data Available
        </Typography>
      </>

  );
};

export default Table;
