const router = require('express').Router();

router.use('/listings', require('./listings'));

module.exports = router;