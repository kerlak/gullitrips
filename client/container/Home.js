import React, { Component } from 'react';
import CityFinder from '../cities/CityFinder'
import TopNav from '../TopNav'
import MapWithADirectionsRenderer from '../MyMapComponent'

// App component - represents the whole app
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="home_header">
          <TopNav goHome={this.props.goHome}/>
          <div className="map translucid">
            {React.createElement(MapWithADirectionsRenderer, {})}
          </div>
        </div>
        <CityFinder selectCity={this.props.selectCity}/>
      </div>
    );
  }
}

export default Home
