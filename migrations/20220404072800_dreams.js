exports.up = function (knex) {
  return knex.schema.createTable('dreams', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('dream_description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dreams')
}
