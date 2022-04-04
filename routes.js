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
router.get('/add', async (req, res) => {
  const data = await db.getDreams()
  res.render('addDreams', { dreams: data })
})

// this route is to save the add dreams
router.post('/add', async (req, res) => {
  await db.saveDream(req.body)
  res.redirect('/')
})

module.exports = router
