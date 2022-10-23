const ObjectId = require('mongoose').ObjectId;
const userSchema = require('../models/logins');

//GETS ALL LOGINS
async function getAllLogins(req, res) {
  try {
    const posts = await userSchema.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//GETS A SPECIFIC LOGIN
async function getOneLogin(req, res) {
  try {
    const post = await userSchema.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Must use a valid user ID.' });
  }
}

//CREATES A LOGIN
async function createLogin(req, res) {
  try {
    const post = new userSchema({
      username: req.body.username,
      password: req.body.password,
    });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//UPDATE A LOGIN
async function updateLogin(req, res) {
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

//DELETE A LOGIN
async function deleteLogin(req, res) {
  try {
    const removedPost = await userSchema.deleteOne({ _id: req.params.postId });
    res.status(200).json(removedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

module.exports = {
  getAllLogins,
  getOneLogin,
  createLogin,
  updateLogin,
  deleteLogin,
};
