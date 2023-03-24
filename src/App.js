import logo from "./logo.svg";
// import "./App.css";
import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

function App() {
  const [rowData, setRowData] = useState([
    { Make: "Ford", Model: "Ford", Price: 2000 },
    { Make: "Toyota", Model: "Toyota", Price: 3000 },
    { Make: "ABC", Model: "ABC", Price: 4000 },
  ]);
  // const rowData = [
  //   { Make: "Ford", Model: "Ford", Price: 2000 },
  //   { Make: "Toyota", Model: "Toyota", Price: 3000 },
  //   { Make: "ABC", Model: "ABC", Price: 4000 },
  // ];

  const [columnDefs, setColumnDefs] = useState([
    { field: "Make", sortable: true, filter: true },
    { field: "Model", sortable: true, filter: true },
    { field: "Price", sortable: true, filter: true },
  ]);

  // const columnDefs = [
  //   { field: "Make" },
  //   { field: "Model" },
  //   { field: "Price" },
  // ];

  // useEffect(() => {
  //   fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //     .then((result) => result.json())
  //     .then((rowData) => setRowData(rowData));
  // }, []);
  return (
    <div className="ag-theme-alpine-dark" style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  );
}

export default App;
