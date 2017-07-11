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

postSchema.virtual('authorString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});

postSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.authorString,
    created: this.created
  };
}

const Post = mongoose.model('Post', postSchema)

module.exports = {Post};
