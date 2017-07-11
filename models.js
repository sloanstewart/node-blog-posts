// const uuid = require('uuid');
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {
    firstName: String,
    lastName: String
  },
  created: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema)

module.exports = {Post};
