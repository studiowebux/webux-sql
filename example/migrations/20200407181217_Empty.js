exports.up = function(knex) {
  return knex.schema.createTable("Empty", function(table) {
    table.increments(); // id (PK)
    table.timestamps(); // created_at & updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("Empty");
};