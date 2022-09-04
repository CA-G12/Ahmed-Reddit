const { Router } = require('express');
// const postsRouter = require('./posts');
// const userRouter = require('./user');
const registerRouter = require('./register');

const router = Router();

// router.use(postsRouter);
// router.use(userRouter);
router.use(registerRouter);

module.exports = router;
