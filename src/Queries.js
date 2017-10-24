import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class Queries extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  render(){
    let param = this.props.param;
    let queriesarr = this.props.queriesarr;
    let lat = 35.7082;
    let lng = 139.7305;

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10){  dd='0'+dd;  }
    if(mm<10){  mm='0'+mm;  }

    let data = [];

    for( var i=0; i<queriesarr.length; i++){
      let copiedData = {
        name : queriesarr[i],
        lat: lat,
        lng: lng,
        distance: 5,
        today: dd+'.'+mm+'.'+yyyy}
      data.push(copiedData);
    }

    if(param == ''){
      data = [];
    }

    // let testObject = { 'one': 1, 'two': 2, 'three': 3 };
    // localStorage.setItem('data', JSON.stringify(data));
    // let retrievedObject = localStorage.getItem('data');
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));

    return(
      <div>
      <br />
        <ReactTable
          data={data}
          columns={[
            {
              columns: [
              {
                Header: 'Name',
                accessor: "name"
              },{
                Header: 'Latitude',
                accessor: "lat"
              },{
                Header: 'Longitude',
                accessor: "lng"
              },{
                Header: 'Distance',
                accessor: "distance"
              },{
                Header: 'Date',
                accessor: "today"
              }]
            }
          ]}
          className="-striped -highlight"
          showPagination={false}
          minRows={3}
        />
        <br />
      </div>
    );
  }
}

export default Queries;
