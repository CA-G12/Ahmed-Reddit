const { connection } = require('../../config/connection');

const deleteLikeQuery = (uesrId, postId) => {
    connection.query('delete from votes where user_id = ($1) and post_id = ($2);', [uesrId, postId])
    return connection.query('UPDATE posts SET likes = likes -1 where id = ($1);', [postId])
}

module.exports = { deleteLikeQuery };
