const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
  res.send([{ 
    user: 'name',
    age: 28
  }, { 
    user: 'newName',
    age: 29
  }])
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