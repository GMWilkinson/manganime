const Character = require('../models/manga');

function indexRoute(req, res) {
  // Find all the Mangas, then render an ejs file:
  // Find returns an array
  Character.find().then(function(result) {
    const characterObject = {
      characters: result
    };
    res.render('mangas/show', characterObject);
  });
  // This is what we previously did:
  // res.render('cocktails/index', cocktailObject);
}

function newRoute(req, res) {
  res.render('mangas/new');
}

function createRoute(req, res) {
  Character.create(req.body)
    .then(result => res.redirect(`/mangas/${result._id}`));
}

function showRoute(req, res) {
  console.log('req.params is', req.params);
  // Get a cocktail out of the database, using its ID
  // Get a particular cocktail then render an ejs file
  Character.findById(req.params.id).then(result => {
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
  console.log(`Updating character id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Character.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      // Redirect to the index (for now!)
      res.redirect('/mangas/show');
    });
}

function editRoute(req, res) {
  // First get the Manga from the database
  // findById returns an object, so we can hand it straight
  // into the EJS file.
  Character.findById(req.params.id)
    .then(result => {
      res.render('mangas/edit', result);
    });
}

function deleteRoute(req, res) {
  Character.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/mangas/show'));
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
