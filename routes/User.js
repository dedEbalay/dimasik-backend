const userController = require('../controllers/userController');

const Router = require('express'),
      router = new Router,
      UserController = require('../controllers/userController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.auth)

module.exports = router;