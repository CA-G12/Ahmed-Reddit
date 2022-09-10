const { Router } = require('express');
const { addPost, addComment, addLike, deletePost, deleteComment, deleteLike } = require('../controllers');
const { authentication } = require('../middlewares/authentication');

const router = Router();

router.post('/post/add-post', authentication, addPost);
router.get('/post/delete-post/:id', authentication, deletePost);
router.post('/post/add-comment', authentication, addComment);
router.get('/post/delete-comment/:id', authentication, deleteComment);
router.post('/post/add-like', authentication, addLike);
router.get('/post/delete-like/:id', authentication, deleteLike);

module.exports = router;
