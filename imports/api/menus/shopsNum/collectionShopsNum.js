// Definition of the ShopsNum collection

import { Mongo } from 'meteor/mongo';

import shopsNumSchema from './schemaShopsMenu'

export const ShopsNum = new Mongo.Collection('shopsNum');

ShopsNum.allow({
    insert: () => false,
    update: () => false,
    remove: () => false,
  });
  
  ShopsNum.deny({
    insert: () => true,
    update: () => true,
    remove: () => true
  });
  
  ShopsNum.attachSchema(shopsNumSchema);
  
  