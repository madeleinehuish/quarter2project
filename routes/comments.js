'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const router = express.Router();

router.get('/comments/:movieId', (req, res, next) => {
  const movieId = Number.parseInt(req.params.movieId);

  if (!Number.isInteger(movieId)) {
    return next(boom.create(400, 'Movie ID must be an integer'));
  }
  knex('comments')
  .innerJoin('users', 'users.id', 'comments.user_id')
  .where('movie_id', movieId)
  .orderBy('comments.created_at', 'ASC')
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
  const comment = req.body.comment;

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
        throw boom.create(404, 'Movie not found');
      }

      const insertComment = { movieId, userId, comment };

      return knex('comments')
        .insert(decamelizeKeys(insertComment), '*');
    })
  .then((rows) => {
    const commentOut = camelizeKeys(rows[0]);

    res.send(commentOut);
  })
  .catch((err) => {
    next(err);
  });
});
module.exports = router;
