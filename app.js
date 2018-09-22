const express = require('express')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()); // for application/json
app.use(bodyParser.urlencoded({ extended: true })); // for application/x-www-form-urlencoded
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(3000, () => console.log('listen..'))
