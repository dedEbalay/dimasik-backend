const Router = require('express'),
      router = new Router,
      userController = require('../controllers/userController'),
      authMiddleware = require('../middleware/AuthMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.auth);

module.exports = router;