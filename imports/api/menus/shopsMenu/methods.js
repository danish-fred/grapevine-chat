// Methods related to Shops_rmenu

import { Meteor} from 'meteor/meteor';
import { ShopsMenu} from './collectionShopsMenu';
Meteor.methods({
  'shopsMenu.insert': function(params) {
    ShopsMenu.insert(params);
  },
  'shopsMenu.update': function(id, params) {
    ShopsMenu.update({
      _id: id
    },{ $set: params });
  },
  'shopsMenu.remove': function (id)  {
    ShopsMenu.remove(id);
  }
});