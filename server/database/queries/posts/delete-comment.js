const { connection } = require('../../config/connection');

const deleteCommentQuery = () => connection.query('');

module.exports = { deleteCommentQuery };
