const Char = require('../models/manga');

function createRoute(req, res) {
  Char.findById(req.params.mangaId)
    .then(character => {
      console.log('Creating a character!', character, req.body);
      character.characters.push(req.body);
      character.save().then(() => res.redirect('/mangas'));
    });
}

function deleteRoute(req, res) {
  console.log('Deleting rating', req.params.ratingId);
  Char.findById(req.params.mangaId)
    .then(character => {
      character.characters.id(req.params.characterId).remove();
      character.save()
        .then(() => res.redirect(`/mangas/${req.params.mangaId}`));
    });
}


module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
