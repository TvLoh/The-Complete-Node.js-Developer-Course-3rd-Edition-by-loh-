// nodemon .\src\app.js -e js,hbs

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Defined paths for Express config
const publicDiractoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDiractoryPath))

app.get('', (req, res) => {
  res.render('index', {
    pageTitle: 'Weather App', 
    userName: 'yourName',
    creatorName: 'Creators Name'
  })
}) 

app.get('/abought', (req, res) => {
  res.render('abought', {
    pageTitle: 'Abought Me', 
    userName: 'yourName',
    creatorName: 'Creators Name'
  })
}) 

app.get('/help', (req, res) => {
  res.render('help', {
    pageTitle: 'Help',
    helpMessage: "This is a help Message",
    creatorName: 'Creators Name'
  })
}) 



app.get('/weather', (req, res) => {
  res.send('Hier könnte Ihr Wetter angezeigt werden.')
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    pageTitle: 'Error 404 on Help page',
    errorMessage: 'Help page not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    pageTitle: 'Error 404',
    errorMessage: 'Page not found.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on Port 3000')
})