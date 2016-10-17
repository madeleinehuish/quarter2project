'use strict';

const boom = require('boom');
const express = require('express');
// const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

// if userid route is added later it will not work
router.get('/comments/:movieId', (req, res, next) => {
const movieId = Number.parseInt(req.params.movieId);

  if (!Number.isInteger(movieId)) {
    return next(boom.create(400, 'Movie ID must be an integer'));
  }

  knex('comments')
  .innerJoin('users', 'users.id', 'comments.user_id')
  .where('movie_id', movieId)
  .orderBy('comments.created_at', 'DESC')
  .then((rows) => {
    const comment = camelizeKeys(rows);

    res.send(comment);
  })
  .catch((err) => {
    next(err);
  });
});


router.post('/comments', (req, res, next) => {
  const movieId = Number.parseInt(req.body.movieId);
  const userId = Number.parseInt(req.body.userId);

  if (!Number.isInteger(movieId)) {
    return next(boom.create(400, 'Movie ID must be an integer'));
  }

  if (!Number.isInteger(userId)) {
    return next(boom.create(400, 'User ID must be an integer'));
  }
  knex('movies')
    .where('id', movieId)
    .first()
    .then((movie) => {
      if (!movie) {
        throw boom.create(404, 'Movie not found')
      }
      const comment = req.body.comment;
      const insertComment = {movieId: movieId, userId: userId, comment: comment};

      return knex('comments')
        .insert(decamelizeKeys(insertComment), '*');
  })
  .then((rows) => {
    const comment = camelizeKeys(rows[0]);
    res.send(comment);
   })
   .catch((err) => {
     next(err);
   });
});

// router.delete('/comments', (req, res, next) => {
//   const movieId = Number.parseInt(req.body.movieId);
//
//   if (!Number.isInteger(movieId)) {
//     return next(boom.create(400, 'Movie ID must be an integer'));
//   }
//
//   //eslint-disable-next-line camelcase
//   const clause = { movie_id: movieId, user_id: userId, comment: comment };
//
//   let favorite;
//
//   knex('comment')
//   .where(clause)
//   .first()
//   .then((row) => {
//     if(!row) {
//       throw boom.create(404, 'Comment not found');
//     }
//
//     favorite = camelizeKeys(row);
//
//     return knex('comments')
//     .del()
//     .where('id', comment.id);
//   })
//   .then(() => {
//     delete comment.id;
//
//     res.send(comment);
//   })
//   .catch((err) => {
//     next(err);
//   });
// });


module.exports = router;
