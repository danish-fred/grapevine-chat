// Methods related to ShopsNum

import { Meteor } from 'meteor/meteor';
import { ShopsNum } from './collectionShopsNum';

Meteor.methods({
    'shopsNum.insert': function (params) {
      ShopsNum.insert(params);
    },
    'shopsNum.update': function (params) {
      ShopsNum.update({  }, {
        $set: params
      });
    },
    'shopsNum.remove': function (id) {
      ShopsNum.remove(id);
    }
  });