const Manga = require('../models/manga');

function indexRoute(req, res) {
  // Find all the Mangas, then render an ejs file:
  // Find returns an array
  Manga.find().then(function(result) {
    const mangaObject = {
      mangas: result
    };
    res.render('mangas/index', mangaObject);
  });
  // This is what we previously did:
  // res.render('cocktails/index', cocktailObject);
}

function newRoute(req, res) {
  res.render('mangas/new');
}

function createRoute(req, res) {
  Manga.create(req.body)
    .then(result => res.redirect(`/mangas/${result._id}`));
}

function showRoute(req, res) {
  console.log('req.params is', req.params);
  // Get a cocktail out of the database, using its ID
  // Get a particular cocktail then render an ejs file
  Manga.findById(req.params.id).then(result => {
    res.render('mangas/show', result);
  });
  // Here's what we did earlier
  // const cocktail = cocktailObject.cocktails.filter(cocktail =>
  //   cocktail.id === req.params.id)[0];
  // res.render('cocktails/show', cocktail);
}

function updateRoute(req, res) {
  // req.params.id is the id of the cocktail we are trying
  // to update
  console.log(`Updating manga id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Manga.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      // Redirect to the index (for now!)
      res.redirect('/mangas');
    });
}

function editRoute(req, res) {
  // First get the Manga from the database
  // findById returns an object, so we can hand it straight
  // into the EJS file.
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
