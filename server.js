const express = require('express')
const hbs = require('express-handlebars')
//const { dirname } = require('path')
//const path = require('path')

const routes = require('./routes')

const server = express()

// Middleware
server.engine(
  'hbs',
  hbs.engine({
    extname: 'hbs',
  })
)
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
//server.set('views'.path.join(dirname__, 'views'))

// Routes
server.use('/', routes)

module.exports = server
