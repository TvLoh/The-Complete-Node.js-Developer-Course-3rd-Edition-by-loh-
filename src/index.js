require('./db/mongoose')

const express = require('express')
const bcrypt = require('bcrypt')
const Task = require('./models/task')
const routerUser = require('./routers/user')
const routerTasks = require('./routers/tasks')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3000

/* app.use((req, res, next) => {
  if (req.method === 'GET') {
    res.status(400).send('GET requests are dissabled')
  } else {
    next()
  }
}) */

app.use(function (req, res, next) {
  res.status(503).send('This Page is under maintenance right now!!!')
})

app.use(express.json())
app.use(routerUser)
app.use(routerTasks)

//
// Without middleware: new request -> run router handler
//
// With    middleware: new request -> do somehing -> run router handler
//

app.listen(port, () => {
  console.log('Server is up on Port: ' + port)
})

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '1 days' })
  console.log(token);

  const data = jwt.verify(token, 'thisismynewcourse')
  console.log(data);
}

myFunction()