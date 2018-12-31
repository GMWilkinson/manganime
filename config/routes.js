
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

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/mangas', mangaController.indexRoute);

router.get('/mangas/new', secureRoute, mangaController.newRoute);

router.post('/mangas', secureRoute, mangaController.createRoute);

router.get('/mangas/:id', mangaController.showRoute);

router.put('/mangas/:id', secureRoute, mangaController.updateRoute);

router.get('/mangas/:id/edit', secureRoute, mangaController.editRoute);

router.delete('/mangas/:id', secureRoute, mangaController.deleteRoute);

router.post('/mangas/:mangaId/ratings', secureRoute, ratingController.createRoute);
router.post('/mangas/:mangaId/characters', secureRoute, characterController.createRoute);

router.delete('/mangas/:mangaId/characters/:characterId', secureRoute,
  characterController.deleteRoute);

router.delete('/mangas/:mangaId/ratings/:ratingId', secureRoute,
  ratingController.deleteRoute);

module.exports = router;
