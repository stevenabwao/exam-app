import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              className: "sticky",
              headerClassName: "sticky"
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Age",
              accessor: "age"
            },
            {
              Header: "Status",
              accessor: "status"
            },
            {
              Header: "Visits",
              accessor: "visits"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
