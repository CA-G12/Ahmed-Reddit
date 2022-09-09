const { connection } = require('../../config/connection');

const feedQuery = () => connection.query('select posts.*, users.name, users.img  from posts join users on posts.user_id = users.id ORDER BY posts.likes DESC;');

module.exports = { feedQuery };
