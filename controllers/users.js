const userSchema = require('../models/user');

//GETS USER INFO
async function getUserInfo(req, res) {
  try {
    const users = await userSchema.find();
    let singleUser = [];
    users.forEach((user) => {
      if (user.identifier === req.user.identifier) {
        singleUser.push(user);
      }
    });
    res.status(200).json(singleUser);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//DELETE SPECIFIC NOTE
async function deleteUser(req, res) {
  try {
    const user = await userSchema.findById(req.params.postId);
    if (user.identifier === req.user.identifier) {
      const removedPost = await userSchema.deleteOne({
        _id: req.params.postId,
      });
      res.status(200).json(removedPost);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getUserInfo,
  deleteUser,
};
