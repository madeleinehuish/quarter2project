'use strict';
const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/movies', (_req, res, next) => {
  knex('movies')
    .orderBy('title')
    .then((rows) => {
      const movies = camelizeKeys(rows);

      res.send(movies);
    })
    .catch((err) => {
      next(err);
    });
});
router.get('/movies/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }
  knex('movies')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }
      const movie = camelizeKeys(row);

      res.send(movie);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;
