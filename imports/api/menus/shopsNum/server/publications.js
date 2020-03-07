// All links-related publications

import { Meteor } from 'meteor/meteor';
import { ShopsNum } from '../collectionShopsNum';

Meteor.publish('ShopsNum.all', function () {
  return ShopsNum.find();
});
