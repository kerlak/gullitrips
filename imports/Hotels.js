import { Mongo } from 'meteor/mongo'
import { HTTP } from 'meteor/http'

Meteor.methods({
  getHotels(lat, lon) {
    try {
      let hotels = null
      console.log('Aqui entra', Meteor.isServer)
      if(Meteor.isServer)
          hotels = HTTP.get('http://sandbox.hotelscombined.com/api/2.0/hotels?destination=latlon:' + lat + ','+lon+'&apiKey=F18EF0CD-E43D-4814-87DD-E7B08FAEF6D4&sessionID=187183')
      console.log(hotels)
      return hotels.data.results
    } catch (error) {
      throw new Meteor.Error('oops', error);
    }
  }


});
