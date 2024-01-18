const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A book must have a title'],
  },
  pageCount: {
    type: Number,
    required: [true, 'A book must haave number of pages'],
  },
  authors: [String],
  thumbnailUrl: {
    type: String,
    required: [true, 'A book must have an image cover'],
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
