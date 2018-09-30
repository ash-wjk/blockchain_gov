
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 6.927079, lng: 79.861244 },
    zoom: 11
  }
render() {
    return (
      <div style={{ height: '400px', width: '100%' }} className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 6.927079 }
            lng={ 79.861244 }
            text={ 'Wheres Waldo?' }
          />
        </GoogleMapReact>
      </div>
    );
  }
}
