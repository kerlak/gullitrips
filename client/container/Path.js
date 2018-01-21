import React, { Component } from 'react';
import CityFinder from '../cities/CityFinder'
import TopNav from '../TopNav'
import MapWithADirectionsRenderer from '../MyMapComponent'
import PathExpanded from '../PathExpanded'
import Checkpoint from '../Checkpoint'

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

    this.state = {
      selectedIdx: null
    }
  }

  selectMap(idx){
    console.log("select map checkpoint")
    this.setState({selectedIdx: idx})
  }

  drawCheckpointCard(checkpoint, idx) {
    return (
      <Checkpoint onClick={() => this.selectMap(idx)} key={idx} checkpoint={checkpoint} />
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
              {React.createElement(MapThumb, {path:cityPath, selectedIdx: this.state.selectedIdx})}
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
