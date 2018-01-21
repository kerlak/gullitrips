import { Meteor } from 'meteor/meteor';

import {PathFinder} from '../imports/PathFinder'
import {Checkpoints} from '../imports/Checkpoints'
import {Paths} from '../imports/Paths'
import {Cities} from '../imports/Cities'

Meteor.startup(() => {
  if( Paths.find().fetch().length == 0 ){

    //var cities = require('cities.json')
    const path = {
        name: 'Awesome Path',
        description: 'Description of an awesome path',
        tags: ['awesome','party'],
        rating: 4.2,
        hours: 1.7,
        checkpoints: []
    }

    const checkpoints = [
      {
        name: 'Cool checkpoint',
        description: 'Yet another checkpoint',
        lat: 40.4299878,
        lon: -3.6960338,
        rating: 5
      },
      {
        name: 'Another checkpoint',
        description: 'Some checkpoint',
        lat: 44,
        lon: -4,
        rating: 4
      },
      {
        name: 'Another checkpoint 1',
        description: 'Some checkpoint 2',
        lat: 40.465511,
        lon: -3.6187617,
        rating: 4
      }
    ]

    path.city_id = "1252"
    for(let cp of checkpoints){
      let cp_id = Checkpoints.insert(cp)
      path.checkpoints.push(cp_id)
    }
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
  }
})
