import React from "react";
import "./Table.css";

function Table({fields,rows}) {
    return (
     <>
        <table className="table">
    <thead>
        <tr>
            {fields.map((field,idx)=>{
                 return <th> {field} </th>
            })}
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dom</td>
            <td>6000</td>
        </tr>
        <tr className="active-row">
            <td>Melissa</td>
            <td>5150</td>
        </tr>
    </tbody>
</table>

     </>
    )
  }

export default Table;
