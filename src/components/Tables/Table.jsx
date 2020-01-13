import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
//import SortIcon from "@material-ui/icons/ArrowDownward";
import mean from "./mean"
const columns = [
  {
    name: "Year",
    selector: "year",
   
  },
  {
    name: "Mean",
    selector: "mean",
    
  },
  
];

const Table =() => {
  return (
    <div className="App">
      <Card>
        <DataTable
          title="Yearly School Mean"
          columns={columns}
          data={mean}
          defaultSortField="title"
          
        />
      </Card>
    </div>
  );
}

export default Table
