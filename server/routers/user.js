const { Router } = require('express');
const { feed, profile } = require('../controllers');
const { authentication } = require('../middlewares/authentication')

const router = Router();

router.get('/user/feed', feed);
router.get('/user/profile', authentication, profile);

module.exports = router;