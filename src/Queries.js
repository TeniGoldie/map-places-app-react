import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class Queries extends Component {
  render(){
    const data = this.props.venues;
    return(
      <div>
      <br />
        <h4>Query results:</h4>
          <ReactTable
            data={data}
            columns={[
                  {
                    accessor: "name"
                  },
                  {
                    accessor: "location.lat"
                  },
                  {
                    accessor: "location.lng"
                  },
                  {
                    accessor: "location.distance"
                  },
                  {
                    accessor: "data"
                  }
            ]}
            className="-striped -highlight"
            defaultPageSize={3}
            showPagination={false}
          />
      </div>
    );
  }
  }
export default Queries;
