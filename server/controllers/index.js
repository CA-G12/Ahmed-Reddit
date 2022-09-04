const {
  addComment,
  addLike,
  addPost,
  deleteComment,
  deleteLike,
  deletePost,
} = require('./posts');
const { signIn, signUp, signOut } = require('./register');
const { feed, profile } = require('./user');

module.exports = {
  addComment,
  addLike,
  addPost,
  deleteComment,
  deleteLike,
  deletePost,
  signIn,
  signUp,
  signOut,
  feed,
  profile,
};
