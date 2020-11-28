const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const librarySchema = new Schema({
  bookname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;