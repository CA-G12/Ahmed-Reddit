const { connection } = require('../../config/connection');

const profileQuery = (userId) => connection.query('select * from posts where posts.user_id = ($1) ORDER BY likes DESC;', [userId]);

module.exports = { profileQuery };
