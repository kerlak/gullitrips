import React, { Component } from 'react';

class City extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {name, country, id, selectCity} = this.props
    return (
      <li className="city" onClick={() => selectCity(id)}>
        <div className="name">{name}</div>
        <div className="country">{country}</div>
      </li>
    )
  }
}

export default City
