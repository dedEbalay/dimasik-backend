const Router = require('express'),
      router = new Router,
      newsController = require('../controllers/newsController'),
      checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), newsController.post);
router.get('/', newsController.getAll)
router.get('/:id', newsController.getOne)

module.exports = router;