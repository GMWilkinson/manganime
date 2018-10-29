const mongoose = require('mongoose');

const mangaSchema = mongoose.Schema({
  book: String,
  author: String,
  bookCover: String,
  characters: { type: mongoose.Schema.ObjectId, ref: 'Character' },
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



// { type: mongoose.Schema.ObjectId, ref: 'Character' },
