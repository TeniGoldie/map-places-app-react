import React, { Component } from 'react';
import Map from './Map';
import Places from './Places';
import Queries from './Queries';
import Nav from './Nav';
import {Form, FormGroup, FormControl} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      venues: [],
      value: ''
    }
  }

  async sendRequest(param){
    if(param == undefined){
      param = 'venues';
    }

    const response = await fetch(`https://api.foursquare.com/v2/venues/search?v=20161016&ll=35.708232%2C%20139.7305&query=${param}&client_id=ZFQBAJVWWAXEYSR5HBEEAZJFLTW2A3EKM0KYUPC4GPZSSVLG&client_secret=VRQXFP10WTFL1JMMYXKYNKWRLZYTFAASGUP0DXVEGZVQXZIM`)
      .then(results => {
        return results.json();
      })
    const venues = response.response.venues;
    this.setState({venues : venues})
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  search = e => {
    e.preventDefault();
    let param = this.state.value;
    console.log('param :' + param);
    this.sendRequest.bind(this)(param);
   }

  async componentWillMount(){
    await this.sendRequest.bind(this)();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Queries param={this.state.value}/>
        <Form onSubmit={this.search}>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Search"
              onChange={this.onChange}
            />
          </FormGroup>
        </Form>
        <div style={{width:100+'%', height: 400, background: 'lightblue'}}>
          <Map
            center={{lat:35.7082, lng: 139.7305}}
            zoom={13}
            markers={this.state.venues}
            containerElement={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'%'}} />}
          />
        </div>
        <Places venues={this.state.venues}/>
      </div>
    );
  }
}

export default App;
