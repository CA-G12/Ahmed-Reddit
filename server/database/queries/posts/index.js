const { addCommentQuery } = require('./add-comment');
const { addLikeQuery } = require('./add-like');
const { addPostQuery } = require('./add-post');
const { deleteCommentQuery } = require('./delete-comment');
const { deleteLikeQuery } = require('./delete-like');
const { deletePostQuery } = require('./delete-post');

module.exports = {
  addCommentQuery,
  addLikeQuery,
  addPostQuery,
  deleteCommentQuery,
  deleteLikeQuery,
  deletePostQuery,
};
