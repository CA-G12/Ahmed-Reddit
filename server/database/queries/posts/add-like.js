const { connection } = require('../../config/connection');

const addLikeQuery = (uesrId, postId) => {
    connection.query('INSERT INTO votes(user_id, post_id) VALUES($1, $2);', [uesrId, postId])
     return connection.query('UPDATE posts SET likes = likes +1 where id = ($1);', [postId])
}

module.exports = { addLikeQuery };
