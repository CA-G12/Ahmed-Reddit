const { connection } = require('../../config/connection');

const feedQuery = () => connection.query('');

module.exports = { feedQuery };
