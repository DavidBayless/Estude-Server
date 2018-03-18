exports.up = function(knex, Promise) {
  return knex.schema.createTable('students_teachers', function(table) {
    table.increments()
    table.integer('student_id').unsigned()
    table.foreign('student_id').references("students.id")
    table.integer('teacher_id').unsigned()
    table.foreign('teacher_id').references("teachers.id")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students_teachers');
};
