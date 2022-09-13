// nodemon .\src\app.js -e js,hbs

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geoService = require('./utils/geoService.js')
const weatherService = require('./utils/weatherService.js')

const app = express()
const port = process.env.PORT || 3000

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
    userName: 'Me',
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
  if (!req.query.address) {
    return res.send({
      error: 'An Address must be providet!'
    })
  } else {
    geoService.getGeoLocation(req.query.address, (error, {longitude, latitude, location} = {}) => {
      if (error) {
        console.log('getGeoLocation', error);
        return res.send({
          error: 'Can not find any Location!'
        })
      } else {
        console.log(location + ': ', longitude, latitude)
        const locationReplaced = location.replace(/\s/g, '')
  
        weatherService.getWetherData(locationReplaced, (error, {tempReal, tempFeel, location} = {}) => {
          if (error) {
            console.log('getWetherData', error);
            return res.send({
              error: error
            })
          } else {
            console.log('Temp in ' + location + ' is ' + tempReal + '°C and feels like ' + tempFeel + '°C');
            return res.send({
              location: location,
              forecast: 'Temp in ' + location + ' is ' + tempReal + '°C and feels like ' + tempFeel + '°C',
              weather: {
                tmpReal: tempReal,
                tempFeel: tempFeel
              }
            })
          }
        })
      }
    }
    )
  }
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search tereme!'
    })
  } else {
    return res.send({
      products: [],
    })
  }
  console.log(req.query);
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

app.listen(port, () => {
  console.log('Server is up on Port ' + port)
})