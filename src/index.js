const mongoose = require('mongoose')

const express = require('express')
const bcrypt = require('bcrypt')
const Task = require('./models/task')
const User = require('./models/user')
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

const main = async () => {
/*   const task = await Task.findById('633d7cad554c8ac1e3c4d533')
  // await task.populate('owner').execPopulate()
  await Task.populate('owner')
  console.log(task.owner) */

  const user = await User.findById('633d7b64f7ff619a589ccc25')
  await user.populate('tasks')
  console.log(user.tasks)
}

// main()