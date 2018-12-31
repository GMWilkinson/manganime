const Manga = require('../models/manga');

function indexRoute(req, res) {
  Manga.find().then(function(result) {
    console.log('this is the index result => ', result);
    const mangaObject = {
      mangas: result
    };
    res.render('mangas/index', mangaObject);
  });
}

function newRoute(req, res) {
  res.render('mangas/new');
}

function createRoute(req, res) {
  Manga.create(req.body)
    .then(result =>  res.redirect(`/mangas/${result._id}`));
}

function showRoute(req, res) {
  console.log('req.params is', req.params);
  Manga.findById(req.params.id)
    .then(result => {
      res.render('mangas/show', result);
    });
}

function updateRoute(req, res) {
  console.log(`Updating manga id ${req.params.id}`, req.body);
  Manga.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/mangas');
    });
}

function editRoute(req, res) {
  Manga.findById(req.params.id)
    .then(result => {
      res.render('mangas/edit', result);
    });
}

function deleteRoute(req, res) {
  Manga.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/mangas'));
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
