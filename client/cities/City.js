import React, { Component } from 'react';

class City extends Component {

  preventDefault(e, fun) {
    e.preventDefault()
    fun()
  }

  render() {
    return (
      <li className="city" onClick={() => this.props.selectCity(this.props.id)}>
        <div className="name">{this.props.name}</div>
        <div className="country">{this.props.country}</div>
      </li>
    )
  }
}

export default City
