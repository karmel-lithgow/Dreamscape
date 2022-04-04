const express = require('express')
const req = require('express/lib/request')
const { render } = require('express/lib/response')
const db = require('./db')

const router = express.Router()

// this route gets the home page
router.get('/', async (req, res) => {
  const data = await db.getDreams()
  res.render('dreams', { dreams: data })
})

// this route gets to the add dreams page

module.exports = router
