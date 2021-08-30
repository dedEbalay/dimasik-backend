const Router = require('express'),
      router = new Router,
      userRoute = require('./User'),
      newsRoute = require('./News');

router.use('/user', userRoute);
router.use('/news', newsRoute);

module.exports = router;