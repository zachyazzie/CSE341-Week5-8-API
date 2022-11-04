const userSchema = require('../models/user');

//GETS ALL USER
async function getAllUsers(req, res) {
  try {
    const posts = await userSchema.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: err });
  }
}

//GETS A SPECIFIC USER
async function getOneUser(req, res) {
  try {
    const post = await userSchema.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err });
  }
}

//CREATES A USER
async function createUser(req, res) {
  try {
    const post = new userSchema({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
    });
    console.log(post);
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//UPDATE A USER
async function updateUser(req, res) {
  try {
    const updatedPost = await userSchema.findByIdAndUpdate(
      req.params.postId,
      req.body
    );
    res.status(204).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//DELETE A USER
async function deleteUser(req, res) {
  try {
    const removedPost = await userSchema.deleteOne({ _id: req.params.postId });
    res.status(200).json(removedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
