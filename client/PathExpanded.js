import React, { Component } from 'react';

class PathExpanded extends Component {
  constructor(props) {
    super(props)

    this.drawCheckpoint = this.drawCheckpoint.bind(this)
  }

  drawCheckpoint(checkpoint, id) {
    <div key={id} >{checkpoint.name}</div>
  }

  render() {
    const {cityPath, cityName} = this.props

    return (
      <div>
        <div>MAPA</div>
        <div>
          {
            this.props.cityPath.checkpoints.map(this.drawCheckpoint)
          }
        </div>
        {this.props.cityName}
        {this.props.cityPath.name}
      </div>
    )
  }
}

export default PathExpanded
