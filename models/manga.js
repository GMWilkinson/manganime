const mongoose = require('mongoose');

const mangaSchema = mongoose.Schema({
  book: String,
  author: String,
  bookCover: String,
  review: String,
  characters: [
    {
      name: String,
      image: String,
      details: String
    }
  ],
  ratings: [
    {
      comment: String,
      user: String,
      score: Number
    }
  ]
});

const mangaModel = mongoose.model('Manga', mangaSchema);
module.exports = mangaModel;
