const Manga = require('../models/manga');

function createRoute(req, res) {
  Manga.findById(req.params.mangaId)
    .then(manga => {
      console.log('Creating a comment!', manga, req.body);
      manga.ratings.push(req.body);
      manga.save().then(() => res.redirect('/mangas'));
    });
}

function deleteRoute(req, res) {
  console.log('Deleting rating', req.params.ratingId);
  // Redirect to the SHOW page
  Manga.findById(req.params.mangaId)
    .then(manga => {
      // Find the rating by ID and remove it
      // .id here is a function:
      manga.ratings.id(req.params.ratingId).remove();
      manga.save()
        .then(() => res.redirect(`/mangas/${req.params.mangaId}`));
    });
}

module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
