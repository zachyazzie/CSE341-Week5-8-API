const notesSchema = require('../models/notes');

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

module.exports = {
  getAllUserNotes,
  createNote,
};
