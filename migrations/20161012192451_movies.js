'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('director').notNullable().defaultTo('');
    table.string('year').notNullable().defaultTo('');
    table.string('poster_path').notNullable().defaultTo('');
    table.text('synopsis').notNullable().defaultTo('');
    table.text('trailer_url').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies');
};
