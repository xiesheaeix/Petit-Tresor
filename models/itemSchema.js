const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    images: [{ type: String, required: true }],
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    price: { type: Number, required: true },
    description: { type: String }
  }, {
    timestamps: true
  });
  
  module.exports = itemSchema;
  