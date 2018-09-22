const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()

app.use(cookieSession({
  name: 'hello-express-session',
  keys: ['secret1', 'secret2'],
  maxAge: 60 * 60 * 24 * 1000,
  httpOnly: true
}))
app.use(bodyParser.json()); // for application/json
app.use(bodyParser.urlencoded({ extended: true })); // for application/x-www-form-urlencoded
app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(3000, () => console.log('listen..'))
