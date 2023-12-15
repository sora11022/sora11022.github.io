const userModel = require('../models/user.model');
const accountValid = require('../validations/account.valid');

module.exports = {
  getUser: async (req, res) => {
    try {
      const userList = await userModel.find();
      return res.status(200).json(userList);
    } catch (error) {
      return res.status(500).json({ error: 'OOPS! Something went wrong' });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const existingUser = await userModel.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ error: 'User does not exist' });
      }
      await userModel.findByIdAndDelete(userId);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ message: 'OOPS! Something went wrong' });
    }
  },
  updateUserInfo: async (req, res) => {
    try {
      const userId = req.params.id;
      const body = req.body;

      const existingUser = await userModel.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ error: 'user does not exist' });
      }
      const updatedUser = await userModel.findByIdAndUpdate(userId, body, {
        new: true,
      });

      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(304).json({ error: 'OOPS! Something went error' });
    }
  },
};
