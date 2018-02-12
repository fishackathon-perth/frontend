import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Polygon from 'react-polygon'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
      	key="AIzaSyCVXZ05W6brklnhdVKcSCXte-og2uTZOyM"
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Polygon
        	n={7}
        	size={200}
          lat={59.95413}
          lng={30.1}
          fill="rgba(219, 0, 0, 0.54)"
          text={'Kreyser Avrora'}
        />

      </GoogleMapReact>
    );
  }
}
