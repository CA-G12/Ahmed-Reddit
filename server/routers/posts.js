const { Router } = require('express');
const { addPost, addComment, addLike, deletePost, deleteComment, deleteLike } = require('../controllers');
const { authentication } = require('../middlewares/authentication');

const router = Router();

router.post('/post/add-post', authentication, addPost);
router.delete('/post/delete-post/:id', authentication, deletePost);
router.post('/post/add-comment', authentication, addComment);
router.delete('/post/delete-comment/:id', authentication, deleteComment);
router.post('/post/add-like', authentication, addLike);
router.delete('/post/delete-like/:id', authentication, deleteLike);

module.exports = router;
