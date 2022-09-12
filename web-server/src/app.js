const path = require('path')
const express = require('express')

const app = express()
const publicDiractoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDiractoryPath))

app.get('/weather', (req, res) => {
  res.send('Hier könnte Ihr Wetter angezeigt ')
})

app.listen(3000, () => {
  console.log('Server is up on Port 3000')
})