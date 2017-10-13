import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class Queries extends Component {
  render(){
    let param = this.props.value;
    return(
      <div>
      <br />
        <h4>Query results: {param} </h4>

      </div>
    );
  }
  }
export default Queries;
