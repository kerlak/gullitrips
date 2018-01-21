import React, { Component } from 'react';
import CityFinder from '../cities/CityFinder'
import TopNav from '../TopNav'
import MapWithADirectionsRenderer from '../MyMapComponent'
import PathExpanded from '../PathExpanded'

// App component - represents the whole app
class Path extends Component {
  // constructor(props) {
  //   super(props)
  // }
  //
  // render() {
  //   return (
  //     <div className="container">
  //       <div className="home_header">
  //         <TopNav goHome={this.props.goHome}/>
  //       </div>
  //
  //       <PathExpanded cityPath={this.props.cityPath} cityName={this.props.cityName}/>
  //     </div>
  //   );
  // }



  constructor(props) {
    super(props)
  }

  drawCheckpointCard(checkpoint) {
    return (
      <div className="path_card">
        <div className="path_hour_rating">
          {checkpoint.name}
        </div>
      </div>
    )
  }

  render() {
    const { cityPath } = this.props
    return (
      <div className="container">
        <div className="home_header">
          <TopNav goHome={this.props.goHome}/>
          <div className="city_intro">
            <div className="checkpoint_map">
              {React.createElement(MapThumb, {path:cityPath})}
            </div>
          </div>
        </div>
          <div className="path_list">
            {cityPath.checkpoints.map(this.drawCheckpointCard)}
          </div>
      </div>
    );
  }
}

export default Path
