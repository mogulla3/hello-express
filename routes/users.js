const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send('GET /users')
})

router.get('/:userId', function(req, res) {
    res.send(`hi! userId=${req.params.userId}`)
})

router.post('/', (req, res) => {
    res.send(req.body)
})

module.exports = router
