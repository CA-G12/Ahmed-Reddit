const { connection } = require('../../config/connection');

const deletePostQuery = () => connection.query('');

module.exports = { deletePostQuery };
