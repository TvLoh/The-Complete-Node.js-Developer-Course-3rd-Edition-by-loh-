require('../db/mongoose')

const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body)
  try {
    await task.save()
    res.status(201).send(task)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).send(tasks)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/task/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) {
      return res.status(404).send('Task not found')
    }
    res.status(200).send(task)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.patch('/task/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed']
  const isValueOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValueOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {

    const task = await Task.findById(req.params.id)

    updates.forEach(update => task[update] = req.body[update])

    await task.save()

    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/task/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router