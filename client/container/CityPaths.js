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

  selectPath(e, path) {
    e.preventDefault()
    this.props.selectPath(path)
  }

  drawPathCard(path) {
    return (
      <div className="path_card" onClick={(e) => this.selectPath(e, path)}>
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
    const { cityPaths, cityName } = this.props
    let paths = cityPaths.paths
    return (
      <div className="container">
        <div className="home_header">
          <TopNav goHome={this.props.goHome}/>
          <div className="city_intro">
            <img className="city_photo" src={cityPaths.photo_url} style={{width:'100%'}}/>
            <div className="city_name">{cityName}</div>
          </div>
        </div>
          <div className="path_list">
            {paths.map(this.drawPathCard)}
          </div>
      </div>
    );
  }
}

export default CityPaths
