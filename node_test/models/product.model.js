const mongoose = require('mongoose');
const joi = require('joi');
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category_id: {
      type: mongoose.SchemaType.ObjectId,
      ref: 'category',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('product', productSchema);
