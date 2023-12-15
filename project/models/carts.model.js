const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    isOrdered: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('cart', cartSchema);
