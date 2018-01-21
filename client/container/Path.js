import React, { Component } from 'react';
import CityFinder from '../cities/CityFinder'
import TopNav from '../TopNav'
import MapWithADirectionsRenderer from '../MyMapComponent'
import PathExpanded from '../PathExpanded'

// App component - represents the whole app
class Path extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="home_header">
          <TopNav goHome={this.props.goHome}/>
        </div>

        <PathExpanded cityPath={this.props.cityPath} cityName={this.props.cityName}/>
      </div>
    );
  }
}

export default Path
