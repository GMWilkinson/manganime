const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
const Manga = require('../models/manga');
Manga.collection.drop();

const mangaData = [
  {
    book: 'test',
    author: 'matt',
    bookCover: 'matt.jpeg'
  }
];

Manga.create(mangaData)
  .then(result => {
    console.log(`Created ${result.length} mangas!`);
    mongoose.connection.close();
  });
