import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';


// App component - represents the whole app
class PathMaker extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      description:''
    }
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Path maker</h1>
        </header>
        Name: <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} /> <br/>
        Description: <input value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})} /> <br/>
      </div>
    );
  }
}


export default withTracker(() => {

  return {
    cities: Cities.find().fetch(),
    checkpoints: Checkpoints.find().fetch(),
    paths: Paths.find().fetch()
  };
})(PathMaker);
