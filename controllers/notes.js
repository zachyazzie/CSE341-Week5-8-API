const notesSchema = require('../models/notes');
const { update } = require('../models/user');

//GETS ALL NOTES FROM ONE USER
async function getAllUserNotes(req, res) {
  try {
    const notes = await notesSchema.find();
    let userNotes = [];
    notes.forEach((note) => {
      if (note.identifier === req.user.identifier) {
        userNotes.push(note);
      }
    });
    res.status(200).json(userNotes);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//GET MOST RECENT NOTE
async function getNewestUserNote(req, res) {
  try {
    const notes = await notesSchema.find();
    let userNotes = [];
    notes.forEach((note) => {
      if (note.identifier === req.user.identifier) {
        userNotes.push(note);
      }
    });
    res.status(200).json(userNotes.slice(-1)[0]);
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//CREATES A NOTE
async function createNote(req, res) {
  try {
    const note = new notesSchema({
      identifier: req.user.identifier,
      entry: req.body.entry,
      date: req.body.date,
      location: req.body.location,
      image: req.body.image,
      mood: req.body.mood,
      tags: req.body.tags,
    });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

//EDIT SPECIFIC NOTE
async function editNote(req, res) {
  try {
    const note = await notesSchema.findById(req.params.postId);
    if (note.identifier === req.user.identifier) {
      const updatedPost = await notesSchema.findByIdAndUpdate(
        req.params.postId,
        {
          identifier: req.user.identifier,
          entry: req.body.entry,
          date: req.body.date,
          location: req.body.location,
          image: req.body.image,
          mood: req.body.mood,
          tags: req.body.tags,
        }
      );
      res.status(204).json(updatedPost);
    } else {
      res
        .status(401)
        .json({ message: 'User not authorized to edit this note.' });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
}

//DELETE SPECIFIC NOTE
async function deleteNote(req, res) {
  try {
    const note = await notesSchema.findById(req.params.postId);
    if (note.identifier === req.user.identifier) {
      const removedPost = await notesSchema.deleteOne({
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
  getAllUserNotes,
  getNewestUserNote,
  createNote,
  editNote,
  deleteNote,
};
