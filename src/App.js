import React, { Component } from 'react';
import Map from './Map';
import Places from './Places';

class App extends Component {
  render() {
    const location = {
      lat: 35.652832, lng: 139.83947
    }
    return (
      <div className="App">
        Welcome to React
        <div style={{width:100+'%', height: 400, background: 'lightblue'}}>
          <Map
            center={{lat:35.7082, lng: 139.7305}}
            zoom={14}
            containerElement={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'%'}} />}
          />
        </div>
        <Places />
      </div>
    );
  }
}

export default App;
