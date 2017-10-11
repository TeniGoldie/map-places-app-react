import React, { Component } from 'react';
import {Form, FormGroup, FormControl} from 'react-bootstrap';

class Searchbar extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
  }

  searchVenues(e){
     console.log('searchVenues: ' + this.state.value);
  }

  updateChange(event) {
      this.setState({
         value: event.target.value
       });
    }

  render(){
    return(
      <div>
        <Form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Search"
              onChange={this.updateChange.bind(this)}
            />
            <button onClick={this.searchVenues.bind(this)}>Search</button>
          </FormGroup>
      </Form>
      </div>
    )
  }
}
export default Searchbar;
