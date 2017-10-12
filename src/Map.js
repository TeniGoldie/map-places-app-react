import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  constructor(){
    super()
    this.state = {
      map: null
    }
  }

  mapLoaded(map){
      if(this.state.map != null)
        return
      this.setState({
        map:map
      })
  }

  render() {
    const markers = this.props.markers.map((venue, i) => {

      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng,
        }
      }
      return <Marker key={i} {...marker} />
    })

    return (
    <div>
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}>
        {markers}
      </GoogleMap>
    </div>
    )
  }
}

export default withGoogleMap(Map);
