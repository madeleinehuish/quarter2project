'use strict';
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');
const router = express.Router();

router.get('/favorites/:id', (req, res, next) => {
  knex('favorites')
  .innerJoin('movies', 'movies.id',
   'favorites.movie_id')
  .where('favorites.user_id', req.params.id)
  .orderBy('movies.title', 'ASC')
  .then((rows) => {
    const favorites = camelizeKeys(rows);

    res.send(favorites);
  })
  .catch((err) => {
    next(err);
  });
});
router.get('/favorites/check', (req, res, next) => {
  const movieId = Number.parseInt(req.query.movieId);

  if (!Number.isInteger(movieId)) {
    return next(boom.create(400, 'Movie Id must be an integer'));
  }
  knex('movies')
  .innerJoin('favorites', 'favorites.movie_id', 'movies.id')
  .where({
    'favorites.movie_id': movieId,
    'favorites.user_id': userId
  })
  .first()
  .then((row) => {
    if (row) {
      return res.send(true);
    }
    res.send(false);
  })
  .catch((err) => {
    next(err);
  });
});
router.post('/favorites', (req, res, next) => {
  const movieId = Number.parseInt(req.body.movieId);
  const userId = Number.parseInt(req.body.userId);

  if (!Number.isInteger(movieId)) {
    return next(boom.create(400, 'Movie ID must be an integer'));
  }
  knex('movies')
  .where('id', movieId)
  .first()
  .then((movie) => {
    if (!movie) {
      throw boom.create(404, 'Movie not found');
    }
    const insertFavorite = { movieId, userId };

    return knex('favorites')
    .insert(decamelizeKeys(insertFavorite), '*');
  })
  .then((rows) => {
    const favorite = camelizeKeys(rows[0]);

    res.send(favorite);
  })
   .catch((err) => {
     next(err);
   });
});
router.delete('/favorites', (req, res, next) => {
  const movieId = Number.parseInt(req.body.movieId);
  const userId = Number.parseInt(req.body.userId);

  if (!Number.isInteger(movieId)) {
    return next(boom.create(400, 'Movie ID must be an integer'));
  }

  // eslint-disable-next-line camelcase
  const clause = { movie_id: movieId, user_id: userId };
  let favorite;

  knex('favorites')
  .where(clause)
  .first()
  .then((row) => {
    if (!row) {
      throw boom.create(404, 'Favorite not found');
    }
    favorite = camelizeKeys(row);

    return knex('favorites')
    .del()
    .where('id', favorite.id);
  })
  .then(() => {
    delete favorite.id;
    res.send(favorite);
  })
  .catch((err) => {
    next(err);
  });
});
module.exports = router;
