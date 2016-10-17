'use strict';

exports.seed = function(knex) {
  return knex('comments').del()
    .then(() => {
      return knex('comments').insert([{
        id: 1,
        movie_id: 1,
        user_id: 1,
        comment: 'this was god awful!',
        created_at: new Date('2016-10-16 14:26:16 UTC'),
        updated_at: new Date('2016-10-16 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));"
      );
    });
};
