// Definition of the ShopsMenu collection

import { Mongo} from 'meteor/mongo';

export const ShopsMenu = new Mongo.Collection('shopsMenu');

import shopsMenuSchema from './schemaShopsMenu';

ShopsMenu.allow({
  update: () => false,
  remove: () => false,
  insert: () => false,
});

ShopsMenu.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

ShopsMenu.attachSchema(shopsMenuSchema);