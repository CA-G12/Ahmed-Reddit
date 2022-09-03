const { addComment } = require('./add-comment');
const { addLike } = require('./add-like');
const { addPost } = require('./add-post');
const { deleteComment } = require('./delete-comment');
const { deleteLike } = require('./delete-like');
const { deletePost } = require('./delete-post');

module.exports = {
  addComment,
  addLike,
  addPost,
  deleteComment,
  deleteLike,
  deletePost,
};
