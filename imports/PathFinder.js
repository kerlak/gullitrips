import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import {Paths} from './Paths'
import {Checkpoints} from './Checkpoints'

Meteor.methods({
  'getCityPaths'(city_id) {
    check(city_id, String);

    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    let paths = Paths.find({city_id}).fetch()

    for(let path of paths){
      let checkpoints = []
      for(let cp_id of path.checkpoints){
        let checkpoint = Checkpoints.findOne({_id: cp_id})
        //checkpoints.push( {name: checkpoint.name, description: checkpoint.description} )
        checkpoints.push(checkpoint)
      }
      path.checkpoints = checkpoints
    }

    return paths
  },
});
