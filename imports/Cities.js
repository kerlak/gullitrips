import { Mongo } from 'meteor/mongo'
import { HTTP } from 'meteor/http'

export const Cities = new Mongo.Collection('cities');

Meteor.methods({
  getCities(filter) {
    try {
      let cities = HTTP.get('http://papi.minube.com/cities?lang=es&filter='+filter+'&api_key=Cayd3f')
      return cities.data
    } catch (error) {}
  },
  getCityPhoto(city_id) {
    try {
      let photo = HTTP.get('http://papi.minube.com/pois?lang=es&city_id='+city_id+'&api_key=Cayd3f')
      console.log('photo.ph',photo)
      return photo
    } catch (error) {
      throw new Meteor.Error('oops', 'something broke');
    }
  }


});
