const mongoose = require('mongoose');

const cartProductModel = mongoose.Schema(
  {
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cart',
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('cartProduct', cartProductModel);
