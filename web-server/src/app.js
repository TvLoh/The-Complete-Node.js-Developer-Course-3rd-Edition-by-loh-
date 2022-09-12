const path = require('path')
const express = require('express')

const app = express()
const publicDiractoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDiractoryPath))

app.get('', (req, res) => {
  res.render('index', {title: 'Weather App', userName: 'yourName'})
}) 

app.get('/abought', (req, res) => {
  res.render('abought', {title: 'Abought Me', userName: 'yourName'})
}) 

app.get('/help', (req, res) => {
  res.render('help', {helpMessage: "This is a help Message"})
}) 



app.get('/weather', (req, res) => {
  res.send('Hier könnte Ihr Wetter angezeigt ')
})

app.listen(3000, () => {
  console.log('Server is up on Port 3000')
})