import React, { Component } from 'react';
import CityFinder from '../cities/CityFinder'
import TopNav from '../TopNav'
import MapWithADirectionsRenderer from '../MyMapComponent'

// App component - represents the whole app
class CityPaths extends Component {
  constructor(props) {
    super(props)

    this.drawPathCard = this.drawPathCard.bind(this)
  }

  drawPathCard(path) {
    return (
      <div className="path_card">
        <div className="map">
          {React.createElement(MapThumb, {path:path})}
        </div>
        <div className="path_hour_rating">
          <div className="hour">{path.hours} h</div>
          <div className="rating">{path.rating}</div>
        </div>
      </div>
    )
  }

  render() {
    const { paths } = this.props
    return (
      <div className="container">
        <div className="home_header">
          <TopNav />
        </div>
          <div className="path_list">
            {paths.map(this.drawPathCard)}
          </div>
      </div>
    );
  }
}

export default CityPaths
