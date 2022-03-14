import React, { useState } from "react";
import useTable from "./Hook";
import styles from "./Table.css";
import TableFooter from "./TableFooter";
import { Typography } from '@mui/material';


const Table = ({ data, rowsPerPage, columns }) => {
  const pageRange = (data, rowsPerPage) => {
      const range    = [];
      const numPages = Math.ceil(data.length / rowsPerPage);
    
      for(let i = 1; i<=numPages; i++){
        range.push(i);
      }

      return range;
  }

  let range = pageRange(data,rowsPerPage);
  console.log(range);




  return (
    data?.length > 0 ?
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            {
              columns.map((col, idx) => (
                 <th className={styles.tableHeader} key={idx} >{col}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
              {
                data.map((datum,idx2) => {
                    let values = Object.values(datum);

                    return (
                      <tr key={idx2}>
                          { values.map((val,idx) => ( <td key={idx}>{val}</td>  )) }
                      </tr>
                    )
                })
              }
        </tbody>
      </table>
      {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} /> */}
    </> : 
    <>
     <Typography variant="h4" >
        No Data Available
    </Typography>
    </>

  );
};

export default Table;
