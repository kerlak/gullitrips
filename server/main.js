import { Meteor } from 'meteor/meteor';

import {PathFinder} from '../imports/PathFinder'
import {Checkpoints} from '../imports/Checkpoints'
import {Paths} from '../imports/Paths'
import {Cities} from '../imports/Cities'

Meteor.startup(() => {
  if( Cities.find().fetch().length == 0 ){

    //var cities = require('cities.json')
    const cities = [
      {name:'Madrid', country: 'ES'},
      {name:'Barcelona', country: 'ES'},
      {name:'Sevilla', country: 'ES'},
    ]
    const path = {
        name: 'Awesome Path',
        description: 'Description of an awesome path',
        tags: ['awesome','party'],
        checkpoints: []
    }

    const checkpoints = [
      {
        name: 'Cool checkpoint',
        description: 'Yet another checkpoint',
        lat: 45,
        lon: -3,
        rating: 5
      },
        {
          name: 'Another checkpoint',
          description: 'Some checkpoint',
          lat: 44,
          lon: -4,
          rating: 4
        }
    ]
    var last_city_id=null
    for(let city of cities) last_city_id = Cities.insert(city)
    path.city_id = last_city_id
    for(let cp of checkpoints){
      let cp_id = Checkpoints.insert(cp)
      path.checkpoints.push(cp_id)
    }
    Paths.insert(path)
  }
})
