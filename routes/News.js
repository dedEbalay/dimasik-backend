const Router = require('express'),
      router = new Router,
      newsController = require('../controllers/newsController');

router.post('/', newsController.post);
router.get('/', newsController.getAll)
router.get('/:id', newsController.getOne)

module.exports = router;