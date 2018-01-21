import React, { Component } from 'react';
import CityFinder from '../cities/CityFinder'
import TopNav from '../TopNav'
import MapWithADirectionsRenderer from '../MyMapComponent'

// App component - represents the whole app
class CityPaths extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="home_header">
          <TopNav />
          <div className="map">{React.createElement(MapThumb, {path:this.props.paths[0]})}</div>
        </div>
      </div>
    );
  }
}

export default CityPaths
