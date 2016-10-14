'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

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

// router.get('/movies/:id', (req, res, next) => {
//   const id = Number.parseInt(req.params.id);
//
//   if (Number.isNaN(id)) {
//     return next();
//   }
//
//   knex('movies')
//     .where('id', id)
//     .first()
//     .then((row) => {
//       if (!row) {
//         throw boom.create(404, 'Not Found');
//       }
//
//       const movie = camelizeKeys(row);
//
//       res.send(movie);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// router.post('/movies', (req, res, next) => {
//   const { title, author, genre, description, coverUrl } = req.body;
//
//   if (!title || !title.trim()) {
//     return next(boom.create(400, 'Title must not be blank'));
//   }
//
//   if (!author || !author.trim()) {
//     return next(boom.create(400, 'Author must not be blank'));
//   }
//
//   if (!genre || !genre.trim()) {
//     return next(boom.create(400, 'Genre must not be blank'));
//   }
//
//   if (!description || !description.trim()) {
//     return next(boom.create(400, 'Description must not be blank'));
//   }
//
//   if (!coverUrl || !coverUrl.trim()) {
//     return next(boom.create(400, 'Cover URL must not be blank'));
//   }
//
//   const insertmovie = { title, author, genre, description, coverUrl };
//
//   knex('movies')
//     .insert(decamelizeKeys(insertmovie), '*')
//     .then((rows) => {
//       const movie = camelizeKeys(rows[0]);
//
//       res.send(movie);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// router.patch('/movies/:id', (req, res, next) => {
//   const id = Number.parseInt(req.params.id);
//
//   if (Number.isNaN(id)) {
//     return next();
//   }
//
//   knex('movies')
//     .where('id', id)
//     .first()
//     .then((movie) => {
//       if (!movie) {
//         throw boom.create(404, 'Not Found');
//       }
//
//       const { title, author, genre, description, coverUrl } = req.body;
//       const updatemovie = {};
//
//       if (title) {
//         updatemovie.title = title;
//       }
//
//       if (author) {
//         updatemovie.author = author;
//       }
//
//       if (genre) {
//         updatemovie.genre = genre;
//       }
//
//       if (description) {
//         updatemovie.description = description;
//       }
//
//       if (coverUrl) {
//         updatemovie.coverUrl = coverUrl;
//       }
//
//       return knex('movies')
//         .update(decamelizeKeys(updatemovie), '*')
//         .where('id', id);
//     })
//     .then((rows) => {
//       const movie = camelizeKeys(rows[0]);
//
//       res.send(movie);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });
//
// router.delete('/movies/:id', (req, res, next) => {
//   const id = Number.parseInt(req.params.id);
//
//   if (Number.isNaN(id)) {
//     return next();
//   }
//
//   let movie;
//
//   knex('movies')
//     .where('id', id)
//     .first()
//     .then((row) => {
//       if (!row) {
//         throw boom.create(404, 'Not Found');
//       }
//
//       movie = camelizeKeys(row);
//
//       return knex('movies')
//         .del()
//         .where('id', id);
//     })
//     .then(() => {
//       delete movie.id;
//
//       res.send(movie);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

module.exports = router;
