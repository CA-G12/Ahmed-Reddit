const { connection } = require('../../config/connection');

const LikeQuery = (uesrId, postId) => {
     return connection.query('select * from votes where user_id = ($1) and post_id = ($2);', [uesrId, postId]);
}

module.exports = { LikeQuery };
