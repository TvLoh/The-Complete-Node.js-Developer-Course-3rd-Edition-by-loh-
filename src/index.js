require('./db/mongoose')

const express = require('express')
const bcrypt = require('bcrypt')
const Task = require('./models/task')
const routerUser = require('./routers/user')
const routerTasks = require('./routers/tasks')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(routerUser)
app.use(routerTasks)

app.listen(port, () => {
  console.log('Server is up on Port: ' + port)
})

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse', {expiresIn: ' days'})
  console.log(token);

  const data = jwt.verify(token, 'thisismynewcourse')
  console.log(data);
}

myFunction()