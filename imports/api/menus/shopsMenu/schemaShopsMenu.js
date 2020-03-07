import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Schema = {};

export const ShopsMenuSchema = new SimpleSchema({
    
    'category': {
      type: String,
      optional:true
    },
    'name': {
      type: String,
      optional:true
    },
    'main': {
      type: String,
      optional:true
    },
    'number': {
      type: String,
      optional:true
    },
    'lastnumber': {
      type: String,
      optional:true
    },
    'sku': {
      type: String,
      optional:true
    },
    createdAt: {
      type: Date,
      defaultValue: new Date(),
    },
  });