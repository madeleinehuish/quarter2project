/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('favorites').del()
    .then(() => {
      return knex('favorites').insert([{
        id: 1,
        movie_id: 1,
        user_id: 3,
        created_at: new Date('2016-10-16 14:26:16 UTC'),
        updated_at: new Date('2016-10-16 14:26:16 UTC')
      }, {
        id: 2,
        movie_id: 3,
        user_id: 3,
        created_at: new Date('2016-10-16 14:26:16 UTC'),
        updated_at: new Date('2016-10-16 14:26:16 UTC')
      }, {
        id: 3,
        movie_id: 6,
        user_id: 3,
        created_at: new Date('2016-10-16 14:26:16 UTC'),
        updated_at: new Date('2016-10-16 14:26:16 UTC')
      }, {
        id: 4,
        movie_id: 8,
        user_id: 3,
        created_at: new Date('2016-10-16 14:26:16 UTC'),
        updated_at: new Date('2016-10-16 14:26:16 UTC')
      }, {
        id: 5,
        movie_id: 9,
        user_id: 2,
        created_at: new Date('2016-10-16 14:26:16 UTC'),
        updated_at: new Date('2016-10-16 14:26:16 UTC')
      }, {
        id: 6,
        movie_id: 11,
        user_id: 2,
        created_at: new Date('2016-10-16 14:26:16 UTC'),
        updated_at: new Date('2016-10-16 14:26:16 UTC')
      }]
);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));"
      );
    });
};
