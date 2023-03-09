let express = require('express');
let router = express.Router();

// Make reference to index.js in controllers folder
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/products', indexController.displayProductPage);

/* GET Services page. */
router.get('/services', indexController.displayServicePage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);


/* GET Route for displaying the Login Page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login Page  */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register Page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register Page  */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
