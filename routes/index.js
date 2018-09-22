const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  if (req.session.user_id) {
    res.send(`hi! user_id = ${req.session.user_id}`)
  } else {
    res.send('hi! anonymous. <a href="/login">login</a>')
  }
})

router.get('/login', function(req, res) {
  if (req.session.user_id) {
    res.send(`you are already logged in`)
  } else {
    req.session.user_id = Math.floor(Math.random(1, 100) * 100)
    res.send('login success!')
  }
})

router.get('/logout', function(req, res) {
  req.session = null
  res.send('logout success')
})

router.get('/views', function(req, res) {
  if (req.session.user_id) {
    req.session.views = (req.session.views || 0) + 1
    res.send(`GET /: user_id=${req.session.user_id} views=${req.session.views}`)
  } else {
    res.redirect('/')
  }
})

module.exports = router
