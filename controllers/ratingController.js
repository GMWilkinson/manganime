const Manga = require('../models/manga');

function createRoute(req, res) {
  Manga.findById(req.params.mangaId)
    .then(manga => {
      manga.ratings.push(req.body);
      manga.save().then(() => res.redirect('/mangas'));
    });
}

function deleteRoute(req, res) {
  Manga.findById(req.params.mangaId)
    .then(manga => {
      manga.ratings.id(req.params.ratingId).remove();
      manga.save()
        .then(() => res.redirect(`/mangas/${req.params.mangaId}`));
    });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
