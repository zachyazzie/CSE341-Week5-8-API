const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
  identifier: { type: String, required: true },
  entry: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mood: { type: String, required: true },
  tags: { type: String, required: true },
});

module.exports = mongoose.model('Notes', NotesSchema, 'notes');
