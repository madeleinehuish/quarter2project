/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('movies').del()
    .then(() => {
      return knex('movies').insert([{
        id: 1,
        title: 'The Shining',
        director: 'Stanley Kubrick',
        year: '1980',
        poster_path: 'http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg',
        synopsis: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the…",
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/284/javascript_the_good_parts.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        title: 'Burnt Offerings',
        director: 'Dan Curtis',
        year: '1976',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzNzYzNTc3Nl5BMl5BanBnXkFtZTgwMDUwNTkyMTE@._V1_SX300.jpg',
        synopsis: "A family moves into an old, haunted house that regenerates itself by feeding off of the life forces of its injured occupants.",
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/287/learning_react_native.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        title: 'Event Horizon',
        director: 'Paul W.S. Anderson',
        year: '1997',
        poster_path: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNzY0MjczNV5BMl5BanBnXkFtZTgwOTIxNzQxMTE@._V1_SX300.jpg',
        synopsis: 'A rescue crew investigates a spaceship that disappeared into a black hole and has now returned...with someone or something new on-board.',
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/297/functional_javascript.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 4,
        title: 'Jaws',
        director: '',
        year: '',
        poster_path: 'https://image.tmdb.org/t/p/original/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg',
        synopsis: '',
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/294/react_up_and_running.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 5,
        title: 'The Exorcist',
        director: '',
        year: '',
        poster_path: 'https://image.tmdb.org/t/p/original/7vQJJ02XvP7fS2BNhn98n2pAlM.jpg',
        synopsis: '',
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/295/javascript_design_patterns.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 6,
        title: 'Interview with a Vampire',
        director: '',
        year: '',
        poster_path: 'https://image.tmdb.org/t/p/original/hldXwwViSfHJS0kIJr07KBGmHJI.jpg',
        synopsis: '',
        // trailer_url: 'https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/296/javascript_with_promises.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 7,
        title: 'Dracula',
        director: '',
        year: '',
        poster_path: 'https://image.tmdb.org/t/p/original/ioHxm3D3JdSXR61LRhcVb8KdZOz.jpg',
        synopsis: '',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920033486/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 8,
        title: 'Aliens',
        director: 'Ridley Scott',
        year: '',
        poster_path: 'https://image.tmdb.org/t/p/original/uU9R1byS3USozpzWJ5oz7YAkXyk.jpg',
        synopsis: '',
        // trailer_url: 'http://akamaicovers.oreilly.com/images/0636920032977/lrg.jpg',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));"
      );
    });
};
