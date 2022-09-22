require('./db/mongoose')

const express = require('express')
const User = require('./models/user')
const Task = require('./models/task')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.post('/users', (req, res) => {
  const user = new User(req.body)
  user.status(201).save().then(() => {
    res.send(user)
  }).catch((err) => {
    res.status(400).send(err)
  })
})

app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.status(302).send(users)
  }).catch((err) => {
    res.status(500).send()
  })
})

app.get('/user/:id', (req, res) => {
  const _id = req.params.id
  User.findById(_id).then((user) => {
    console.log(_id);
    if (!user) {
      return res.status(404).send()
    }
    res.send(user)
  }).catch((err) => {
    res.status(500).send(err)
  })
})

app.post('/tasks', (req, res) => {
  const task = new Task(req.body)

  task.save().then(() => {
    res.status(201).send(task)
  }).catch((err) => {
    res.status(400).send(err)
  })
})

app.get('/tasks', (req, res) => {
  Task.find().then((tasks) => {
    res.send(tasks)
  }).catch((err) => {
    res.send(err)
  })
})

app.get('/task/:id', (req, res) => {
  const _id = req.params.id
  Task.findById(_id).then((task) => {
    if (!task) {
      return res.status(404).send()      
    }
    res.send(task)
  }).catch((err) => {
    res.status(400).send(err)
  })
})

app.listen(port, () => {
  console.log('Server is up on Port: ' + port)
})