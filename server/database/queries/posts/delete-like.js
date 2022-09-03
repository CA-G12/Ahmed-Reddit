const { connection } = require('../../config/connection');

const deleteLikeQuery = () => connection.query('');

module.exports = { deleteLikeQuery };
