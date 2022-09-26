require('./db/mongoose')

const express = require('express')
const Task = require('./models/task')
const routerUser = require('./routers/user')
const routerTasks = require('./routers/tasks')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(routerUser)
app.use(routerTasks)

app.listen(port, () => {
  console.log('Server is up on Port: ' + port)
})