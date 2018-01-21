import React, { Component } from 'react';
import Avatar from '../Avatar'

// App component - represents the whole app
class TopNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="top_nav">
        <h3 className="app_name">Gullitrips</h3>
        <Avatar />
      </div>
    );
  }
}

export default TopNav
