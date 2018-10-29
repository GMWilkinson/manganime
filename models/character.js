const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  characterName: String,
  characterImage: String,
  characterDetails: String

});
const characterModel = mongoose.model('Character', characterSchema);

module.exports = characterModel;
