
const mangaController = require('../controllers/mangaController');
const characterController = require('../controllers/characterController');
const authController = require('../controllers/authController');
const ratingController = require('../controllers/ratingController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

router.get('/', function(req, res) {
  res.render('home');
});

// Load the about page
router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/mangas', mangaController.indexRoute);
// router.get('/mangas', characterController.indexRoute);

router.get('/mangas/new', secureRoute, mangaController.newRoute);
// router.get('/mangas/new', secureRoute, characterController.newRoute);
// Listen for POST requests to /mangas
router.post('/mangas', secureRoute, mangaController.createRoute);
// router.post('/mangas', secureRoute, characterController.createRoute);
// SHOW Route
router.get('/mangas/:id', mangaController.showRoute);

// UPDATE route
router.put('/mangas/:id', secureRoute, mangaController.updateRoute);
// router.put('/mangas/:id', secureRoute, characterController.updateRoute);
// EDIT route
router.get('/mangas/:id/edit', secureRoute, mangaController.editRoute);
// router.get('/mangas/:id/edit', secureRoute, characterController.editRoute);
// DELETE Route
router.delete('/mangas/:id', secureRoute, mangaController.deleteRoute);
// router.delete('/mangas/:id', secureRoute, characterController.deleteRoute);
// Rating CREATE route
router.post('/mangas/:mangaId/ratings', secureRoute, ratingController.createRoute);
router.post('/mangas/:mangaId/characters', secureRoute, characterController.createRoute);
// router.route('/mangas/new')
//   .get(characterController.new);

//
// router.route('/mangas/:id')
//   .get(characterController.show);


router.delete('/mangas/:mangaId/characters/:characterId', secureRoute,
  characterController.deleteRoute);

router.delete('/mangas/:mangaId/ratings/:ratingId', secureRoute,
  ratingController.deleteRoute);

module.exports = router;
