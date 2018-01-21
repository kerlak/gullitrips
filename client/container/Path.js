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
      <div className="path_card checkpoint_card">
        <div className="checkpoint">
          <div className="horizontal_checkpoint">
            <div className="point"></div>
            <div className="data">
              <div className="element">{checkpoint.name}</div>
              <div className="element description">{checkpoint.description}</div>
              <div className="element rating">
                {checkpoint.rating} <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <div className="hotels">
                <div className="cost">
                  134 €
                </div>
                <i class="hotel_left fa fa-bed" aria-hidden="true"></i>
              </div>
            </div>
          </div>
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
            <div className="vertical_line"></div>
            {cityPath.checkpoints.map(this.drawCheckpointCard)}
          </div>
      </div>
    );
  }
}

export default Path
