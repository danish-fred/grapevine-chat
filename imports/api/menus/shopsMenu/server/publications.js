// All ShopsMenu-related publications

import { Meteor } from 'meteor/meteor';
import { ShopsMenu } from '../collectionShopsMenu';

Meteor.publish('shopsMenu.all', function () {
  return ShopsMenu.find();
});
