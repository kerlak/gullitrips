import React, { Component } from 'react';

class PathExpanded extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {cityPath, cityName} = this.props
    /**
    citypath*/

    return (
      <div>
        {this.props.cityName}

        {this.props.cityPath.name}
      </div>
    )
  }
}

export default PathExpanded
