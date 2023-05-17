const { User } = require("../model/model");

const userController = {
  //ADD user
  addUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      const saveUser = await newUser.save();

      res.status(200).json(saveUser);
    } catch (err) {
      res.status(500).json(err);
    }
    res.status(200).json(req.body);
  },

  getAllUser: async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
