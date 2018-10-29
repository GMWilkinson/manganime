const Character = require('../models/character');

function characterShow(req, res, next) {
  Character
    .findById(req.params.id)
    .populate('addedCharacters')
    .then(character => {
      console.log(character.characterName);
      res.render('', character);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function characterCreate(req, res) {
  Character.create(req.body)
    .then(res.redirect('/mangas/show'));
}

module.exports = {
  show: characterShow,
  create: characterCreate
};
