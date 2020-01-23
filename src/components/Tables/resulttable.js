import React from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
//import SortIcon from "@material-ui/icons/ArrowDownward";
import result from "./result"
const columns = [
  {
    name: "name",
    selector: "name",
   
  },
  {
    name: "ADM No",
    selector: "adm",
    
  },
  {
    name: "maths",
    selector: "maths",
    
  },
  {
    name: "English",
    selector: "eng",
    
  },
  {
    name: "kis",
    selector: "kis",
    
  },
  {
    name: "chem",
    selector: "chem",
    
  },
  {
    name: "bio",
    selector: "bio",
    
  },
  {
    name: "phyc",
    selector: "phyc",
    
  },
  {
    name: "mean",
    selector: "mean",
    
  },

  
];

const Results =() => {
  return (
    <div className="App">
      <Card>
        <DataTable
          title="Form one Results"
          columns={columns}
          data={result}
          defaultSortField="title"
          
        />
      </Card>
    </div>
  );
}

export default Results
