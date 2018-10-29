const mongoose = require('mongoose');

const mangaSchema = mongoose.Schema({
  book: String,
  author: String,
  bookCover: String,
  character1Name: String,
  character1Image: String,
  character1Details: String,
  character2Name: String,
  character2Image: String,
  character2Details: String,
  character3Name: String,
  character3Image: String,
  character3Details: String,
  character4Name: String,
  character4Image: String,
  character4Details: String,
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
