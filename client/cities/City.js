import React, { Component } from 'react';

class City extends Component {

  render() {
    return (
      <li className="city">
        <div>{this.props.name}</div>
        <div>{this.props.country}</div>
      </li>
    )
  }
}

export default City
