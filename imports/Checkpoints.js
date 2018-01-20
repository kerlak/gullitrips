import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Checkpoints = new Mongo.Collection('checkpoints');


Meteor.methods({
  'checkpoints.create'(checkpoint) {
    check(checkpoint.name, String)
    check(checkpoint.description, String)

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    checkpoint.createdAt = new Date()
    checkpoint.owner = Meteor.userId()

    Checkpoints.insert(checkpoint)
  },
});
