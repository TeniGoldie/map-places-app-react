import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  constructor(){
    super()
    this.state = {
      map: null
    }
  }

  mapMoved(){
    var mapLat = this.state.map.getCenter();
    var data = JSON.stringify(mapLat);
    var parsedData = JSON.parse(data);
    console.log(parsedData.lat, parsedData.lng);
  }

  zoomChanged(){
    console.log('zoomChanged' + this.state.map.getZoom());
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
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}>
        {markers}
      </GoogleMap>
    </div>
    )
  }
}

export default withGoogleMap(Map);
