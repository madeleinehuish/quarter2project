'use strict';

exports.seed = function(knex) {
  return knex('comments').del()
    .then(() => {
      return knex('comments').insert([{
        id: 1,
        movie_id: 1,
        user_id: 1,
        comment: 'this was god awful!',
        created_at: new Date('2016-10-16 14:25:16 UTC'),
        updated_at: new Date('2016-10-16 14:25:16 UTC')
      },{
        id: 2,
        movie_id: 1,
        user_id: 2,
        comment: 'are you insane? this movie was fucking great!',
        created_at: new Date('2016-10-16 14:26:16 UTC'),
        updated_at: new Date('2016-10-16 14:26:16 UTC')
      }, {
        id: 3,
        movie_id: 1,
        user_id: 1,
        comment: 'You are right I commented on the wrong movie, woops..',
        created_at: new Date('2016-10-16 14:27:16 UTC'),
        updated_at: new Date('2016-10-16 14:27:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));"
      );
    });
};
