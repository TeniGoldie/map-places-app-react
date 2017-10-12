import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import {CSVLink, CSVDownload} from 'react-csv';

class Places extends Component {

  render(){
    const data = this.props.venues;
    return(
      <div>

      <CSVLink data={data} >Export CSV</CSVLink>

        <ReactTable
          data={data}
          columns={[
            {
              columns: [
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "City",
                  accessor: "location.city"
                },
                {
                  Header: "Street Address",
                  accessor: "location.address"
                },
                {
                  Header: "Latitude",
                  accessor: "location.lat"
                },
                {
                  Header: "Longitude",
                  accessor: "location.lng"
                }
              ]
            }
          ]}
          className="-striped -highlight"
          showPagination={false}
        />
      </div>
    );
  }
}

export default Places;
