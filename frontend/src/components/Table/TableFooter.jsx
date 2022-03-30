import React from "react";
import "./TableFooter";


const TableFooter = ({ tableRange, setPage, page, slice }) => {


  return (
    <div 
        className="tableFooter"
        style={{marginLeft: "100px", width: "700px"}}
    >
      {tableRange.map((el, index) => (
        <button
          key={index}
          onClick={() => { setPage(el); }}
          className={`button ${el === page ? 'activeButton' : 'inactiveButton'}`}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;
