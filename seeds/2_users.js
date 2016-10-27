/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'jessica',
        last_name: 'bones',
        email: 'j@bones.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',  // youreawizard
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 2,
        first_name: 'jack',
        last_name: 'black',
        email: 'jack@black.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',  // youreawizard
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 3,
        first_name: 'freddy',
        last_name: 'kruger',
        email: 'fred@kruger.com',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',  // youreawizard
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
