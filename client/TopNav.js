import React, { Component } from 'react';
import Avatar from './Avatar'

// App component - represents the whole app
class TopNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="top_nav">
        <h3 id="logo" className="app_name" onClick={this.props.goHome}>GulliTrips</h3>
        <Avatar />
      </div>
    );
  }
}

export default TopNav
