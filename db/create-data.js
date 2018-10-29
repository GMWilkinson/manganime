const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
// Out of the db folder, into models and find cocktail.js
const Manga = require('../models/manga');

// Delete existing data first
Manga.collection.drop();

const mangaData = [
  {
    


  }
];

Manga.create(mangaData)
  .then(result => {
    console.log(`Created ${result.length} mangas!`);
    mongoose.connection.close();
  });
