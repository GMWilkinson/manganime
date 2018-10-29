
const mangaController = require('../controllers/mangaController');
const authController = require('../controllers/authController');
const ratingController = require('../controllers/ratingController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

// Render the layout.ejs file when the user requests the home page
router.get('/', function(req, res) {
  // EJS files in a 'views' folder are the default:
  res.render('home'); // An empty object = no data
});

// Load the about page
router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/mangas', mangaController.indexRoute);


router.get('/mangas/new', secureRoute, mangaController.newRoute);

// Listen for POST requests to /mangas
router.post('/mangas', secureRoute, mangaController.createRoute);

// SHOW Route
router.get('/mangas/:id', mangaController.showRoute);

// UPDATE route
router.put('/mangas/:id', secureRoute, mangaController.updateRoute);

// EDIT route
router.get('/mangas/:id/edit', secureRoute, mangaController.editRoute);

// DELETE Route
router.delete('/mangas/:id', secureRoute, mangaController.deleteRoute);

// Rating CREATE route
router.post('/mangas/:mangaId/ratings', secureRoute, ratingController.createRoute);

// Rating DELETE route
router.delete('/mangas/:mangaId/ratings/:ratingId', secureRoute,
  ratingController.deleteRoute);

module.exports = router;
