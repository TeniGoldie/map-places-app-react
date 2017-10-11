import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Places extends Component {
  render(){
    const results = this.props.venues;
    const list = this.props.venues.map((venue, i) => {
      return(
        <li key={i}>{venue.location.address}</li>
      )
    })

    return(
      <div>
        <BootstrapTable data={ results } striped hover condensed>
          <TableHeaderColumn dataField='name' isKey>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='id'>City</TableHeaderColumn>
          <TableHeaderColumn dataField='location'>Street Address</TableHeaderColumn>
          <TableHeaderColumn dataField='location'>Latitude</TableHeaderColumn>
          <TableHeaderColumn dataField='location'>Longitude </TableHeaderColumn>
        </BootstrapTable>

        <ol>
        <h2>Venues:</h2>
          {list}
        </ol>
      </div>
    )
  }
}
export default Places;
