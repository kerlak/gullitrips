import { Meteor } from 'meteor/meteor';

import {Checkpoints} from '../imports/Checkpoints'
import {Paths} from '../imports/Paths'
import {Cities} from '../imports/Cities'

Meteor.startup(() => {
  if( Cities.find().fetch().length == 0 ){
    const cities = [
      {name:'Madrid', country: 'ES'},
      {name:'Barcelona', country: 'ES'},
      {name:'Sevilla', country: 'ES'},
    ]
    for(let city of cities) Cities.insert(city)
  }
})
