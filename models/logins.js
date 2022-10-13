const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model('Logins', PostSchema, 'logins');
