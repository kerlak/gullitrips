import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import {Checkpoints} from '../imports/Checkpoints'

// App component - represents the whole app
class CheckpointMaker extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'',
      description:''
    }
    this.create = this.create.bind(this)
  }
  create(){
    Meteor.call('checkpoints.create', this.state)
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Path maker</h1>
        </header>
        Name: <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} /> <br/>
        Description: <input value={this.state.description} onChange={(e)=>this.setState({description:e.target.value})} /> <br/>
        <button onClick={this.create}>Create!</button>
      </div>
    );
  }
}


export default withTracker(() => {
  return {}
})(CheckpointMaker);
