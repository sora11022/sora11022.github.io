const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const typeRole = require('../constants/type.role');
const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
    },
    role: {
      type: String,
      enum: Array.from(typeRole),
      default: typeRole.USER,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// xoa password khi return json
accountSchema.set('toJson', {
  transform: function (doc, ret, options) {
    delete ret.password;
  },
});

accountSchema.pre('save', function (next) {
  const account = this;
  if (account.password) {
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  next();
});

accountSchema.pre('findByIdAndUpdate', function (next) {
  const account = this.getUpdate();
  if (account.password) {
    //encrypt password
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  this.setUpdate(account);
  next();
});

accountSchema.pre('findOneAndUpdate', function (next) {
  const account = this.getUpdate();
  if (account.password) {
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  this.setUpdate(account);
  next();
});
module.exports = mongoose.model('account', accountSchema);
