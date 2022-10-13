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

//GETS A SPECIFIC POST
async function getOneLogin(req, res) {
  try {
    const post = await userSchema.find({ username: req.params.username });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err });
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
module.exports = {
  getAllLogins,
  getOneLogin,
  createLogin,
};
