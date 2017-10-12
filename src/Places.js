import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class Places extends Component {

  render(){
    const data = this.props.venues;
    return(
      <div>
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
