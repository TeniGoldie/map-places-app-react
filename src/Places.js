import React, { Component } from 'react';

class Places extends Component {
  render(){
    const list = this.props.venues.map((venue, i) => {
      return(
        <li key={i}>{venue.name}</li>
      )
    })

    return(
      <div>
        <ol>
        <h2>Venues:</h2>
          {list}
        </ol>
      </div>
    )
  }
}
export default Places;
