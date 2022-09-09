const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('Hello Express')
})

app.get('/help', (req, res) => {
  res.send('Help page')
})

app.get('/abought', (req, res) => {
  res.send('abought page')
})

app.get('/weather', (req, res) => {
  res.send('Hier könnte Ihr Wetter angezeigt ')
})

app.listen(3000, () => {
  console.log('Server is up on Port 3000')
})