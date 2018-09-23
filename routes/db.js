const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
})

router.get('/select', function(req, res) {
    conn.query('SELECT * FROM users', function(err, rows, fields) {
        if (err) {
            return res.json({ error: 'error' })
        }
        res.json({ result: rows })
    })
})

router.get('/insert', function(req, res) {
    if (!req.query.name) {
        return res.json({ error: 'name not given' })
    }

    conn.query('INSERT INTO users SET ?', { name: req.query.name }, function(
        err,
        rows,
        fields
    ) {
        if (err) {
            return res.json({ error: 'error' })
        }

        res.json({ result: rows })
    })
})

router.get('/update', function(req, res) {
    if (!req.query.name || !req.query.id) {
        return res.json({ error: 'name or id not given' })
    }

    conn.query(
        'UPDATE users SET name = ? WHERE id = ?',
        [req.query.name, req.query.id],
        function(err, rows, fields) {
            if (err) {
                return res.json({ error: 'error' })
            }
            res.json({ result: rows })
        }
    )
})

module.exports = router
