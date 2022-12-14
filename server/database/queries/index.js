const {
  addCommentQuery,
  LikeQuery,
  addLikeQuery,
  addPostQuery,
  deleteCommentQuery,
  deleteLikeQuery,
  deletePostQuery,
} = require('./posts');

const { signInQuery, signUpQuery } = require('./register');

const { feedQuery, profileQuery } = require('./user');

module.exports = {
  addCommentQuery,
  LikeQuery,
  addLikeQuery,
  addPostQuery,
  deleteCommentQuery,
  deleteLikeQuery,
  deletePostQuery,
  signInQuery,
  signUpQuery,
  feedQuery,
  profileQuery,
};
