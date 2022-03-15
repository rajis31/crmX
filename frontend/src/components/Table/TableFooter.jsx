import React from "react";

const TableFooter = ({ tableRange, setPage, page, slice }) => {


  return (
    <div className="tableFooter">
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
