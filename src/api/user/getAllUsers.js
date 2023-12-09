const User = require("../../models/User");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    res.send(users);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getAllUsers;
