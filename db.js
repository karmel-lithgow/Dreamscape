const router = require('./routes')

const config = require('./knexfile').development
const connection = require('knex')(config)

// this function is to get the dreams list (on homepage)
function getDreams(db = connection) {
  return db('dreams').select()
}

// this function is for adding new dreams
function saveDream(dreams, db = connection) {
  return db('dreams').insert(dreams)
}

module.exports = {
  getDreams,
  saveDream,
}
