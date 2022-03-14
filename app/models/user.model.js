const mongoose = require('mongoose');

// Creates a mongoose Schema for the users
const User = mongoose.model(
  'User',
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
  })
);

module.exports = User;
