exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments()
    table.text('note')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
