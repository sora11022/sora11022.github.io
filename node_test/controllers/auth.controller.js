require('dotenv').config;
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const accountValid = require('../validations/account.valid');
const accountModel = require('../models/account.model');
const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({
      username: username,
    });
    if (!account) {
      throw new ErrorResponse(400, 'Wrong username or password');
    }
    //check password
    let checkPassword = bcryptjs.compareSync(password, account.password);
    if (!checkPassword) {
      throw new ErrorResponse(400, 'Wrong username or password');
    }
    const payload = {
      _id: account._id,
      username: account.username,
      role: account.role,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '15m',
    });
    return res.status(200).json({
      ...payload,
      token: token,
    });
  },
  //jwt

  register: async (req, res) => {
    const body = req.body;
    const { error, value } = accountValid(body);
    if (error) {
      throw new ErrorResponse(400, error.message);
    }
    const newAccount = await accountModel.create(value);
    return res.status(201).json(newAccount);
  },
};
