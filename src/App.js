import React, { Component } from 'react';
import Map from './Map';
import Places from './Places';

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to React
        <Map />
        <Places />
      </div>
    );
  }
}

export default App;
