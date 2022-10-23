const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  notes: {
    type: [Array],

    date: {
      type: [String],
    },
    location: {
      type: [String],
    },
    image: {
      type: [String],
    },
    entry: {
      type: [String],
    },
    tags: {
      type: [mongoose.SchemaTypes.Mixed],
    },
  },
});

module.exports = mongoose.model('Users', PostSchema, 'users');
