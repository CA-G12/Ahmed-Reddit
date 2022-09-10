const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET } = process.env;

const { LikeQuery } = require('../../database/queries');
const { addLikeQuery } = require('../../database/queries');
const { deleteLikeQuery } = require('../../database/queries');

const addLike = (req, res, next) => {
  const { postId } = req.body;
  const { token } = req.cookies;

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: 'unauthenticated' });
    } else {
      const { id } = decoded;
      LikeQuery(id, postId)
    .then((data) => {
        if(data.rows.length == 0){
            addLikeQuery(id, postId);
        }else{
            deleteLikeQuery(id, postId);
        }
        return res.send(data.rows);
    })
    .catch((err) => next(err));
    }
  })




    // .then(res.send({ message: 'add or delete like successfully' }))
    // .catch((err) => next(err));
};

module.exports = { addLike };
