import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http'

import {Paths} from './Paths'
import {Checkpoints} from './Checkpoints'

Meteor.methods({
  'getCityPaths'(city_id) {
    check(city_id, String);

    // Make sure the user is logged in before inserting a task
    // if (! this.userId) {
    //   throw new Meteor.Error('not-authorized');
    // }

    let photo = null
    try {
      photo = HTTP.get('http://papi.minube.com/pois?lang=es&city_id='+city_id+'&api_key=Cayd3f')
    } catch (error) {
      throw new Meteor.Error('oops', 'algo se ha roto!');
    }

    let photo_url=null
    if(photo && photo.data.length>0){
      photo_url = photo.data[0].picture_url
    }
    const paths = Paths.find({city_id}).fetch()

    for(let path of paths){
      let checkpoints = []
      for(let cp_id of path.checkpoints){
        let checkpoint = Checkpoints.findOne({_id: cp_id})
        //checkpoints.push( {name: checkpoint.name, description: checkpoint.description} )
        checkpoints.push(checkpoint)
      }
      path.checkpoints = checkpoints
    }

    return {paths, photo_url}
  },
});
