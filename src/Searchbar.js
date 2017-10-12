import React, { Component } from 'react';
import {Form, FormGroup, FormControl} from 'react-bootstrap';

class Searchbar extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    }
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  search = e => {
     if (e.keyCode === 13) {
     let param = this.state.value;
       console.log('this.state.value:' + param);
     }
   }

  render(){
    const param = this.state.value;
    return(
      <div>
        <br />
        <Form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Search"
              onChange={this.onChange}
              onKeyDown={this.search}
            />
          </FormGroup>
        </Form>
        <p>{param}</p>
      </div>
    )
  }
}
export default Searchbar;
