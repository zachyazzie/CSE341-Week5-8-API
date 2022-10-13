const userSchema = require('../models/users');

//GETS ALL POSTS
async function getAllUsers(req, res) {
  try {
    const posts = await userSchema.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//GETS A SPECIFIC POST
async function getOneUser(req, res) {
  try {
    const post = await userSchema.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//SUBMITS A POST
async function createUser(req, res) {
  try {
    const post = new userSchema({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      notes: req.body.notes,
    });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//UPDATE A POST
async function updateContact(req, res) {
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

//DELETE A POST
async function deleteContact(req, res) {
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
  updateContact,
  deleteContact,
};
