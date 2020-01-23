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
              Header: "Name",
              columns: [
                {
                  Header: () => (
                    <div style={{ textAlign: "right" }}>Right aligned</div>
                  ),
                  accessor: "firstName",
                  Cell: row => (
                    <div style={{ textAlign: "right" }}>{row.value}</div>
                  )
                },
                {
                  Header: () => (
                    <div style={{ textAlign: "left" }}>Left aligned</div>
                  ),

                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: () => (
                    <div style={{ textAlign: "center" }}>Center aligned</div>
                  ),
                  accessor: "age",

                  Cell: row => (
                    <div style={{ textAlign: "center" }}>{row.value}</div>
                  )
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: "Stats",
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
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
