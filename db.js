const router = require('./routes')

const config = require('./knexfile').development
const connection = require('knex')(config)

// this function is to get the dreams list (on homepage)
function getDreams(db = connection) {
  return db('dreams').select()
}

module.exports = {
  getDreams,
}
