import React, { Component } from 'react';
import Map from './Map';
import Places from './Places';
import Queries from './Queries';
import Searchbar from './Searchbar';
import superagent from 'superagent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      venues: []
    }
  }

  componentDidMount(){
    const url = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=35.652832%2C%20139.83947&client_id=ZFQBAJVWWAXEYSR5HBEEAZJFLTW2A3EKM0KYUPC4GPZSSVLG&client_secret=VRQXFP10WTFL1JMMYXKYNKWRLZYTFAASGUP0DXVEGZVQXZIM'

    superagent
    .get(url)
    .query({ query: 'tea' })
    .set('Accept', 'text/json')
    .end((error, response) => {

      const venues = response.body.response.venues;
      //  console.log(JSON.stringify(venues));

      this.setState({
        venues : venues
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Queries />
        <Searchbar />
        <div style={{width:100+'%', height: 400, background: 'lightblue'}}>
          <Map
            center={{lat:35.7082, lng: 139.7305}}
            zoom={13}
            markers={this.state.venues}
            containerElement={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'%'}} />}
          />
        </div>
        <Places  venues={this.state.venues}/>
      </div>
    );
  }
}

export default App;
