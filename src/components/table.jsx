import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";
import paginationFactory from "react-bootstrap-table2-paginator";



export default function TableFormat({ data, columns, onRowClick , placeholder }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchResult = data.filter((row) =>
    Object.values(row).some(
      (value) =>
        value !== null &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      onRowClick(row);
    },
  };
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
        className="table-search-input table_search"
      />
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={searchResult}
        columns={columns}
        rowEvents={rowEvents}
        rowClasses="clickable-row"
        rowStyle={{ cursor: "pointer" }} 
        pagination={paginationFactory()}
 
      />
    </div>
  );
}