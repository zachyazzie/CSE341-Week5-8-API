const { Schema, model } = require('mongoose');

const NotesSchema = new Schema({
  date: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  entry: { type: String, required: true },
});

module.exports = NotesSchema;
