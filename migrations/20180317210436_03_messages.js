exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments()
    table.integer('student_id').unsigned()
    table.foreign('student_id').references("students.id")
    table.integer('teacher_id').unsigned()
    table.foreign('teacher_id').references("teachers.id")
    table.text('message')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
