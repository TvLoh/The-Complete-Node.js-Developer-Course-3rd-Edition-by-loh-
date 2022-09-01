const geoService = require('./utils/geoService.js')
const weatherService = require('./utils/weatherService.js')

const location = process.argv[2]

console.log('Start main')

setTimeout(() => { console.log('timout 0.5sec.'); }, 500)

setTimeout(() => { console.log('timout 0sec.'); }, 0)

if (!location) {
  console.log('Please enter a Location!!!');
} else {
  geoService.getGeoLocation(location, (error, {longitude, latitude, location} = {}) => {
    if (error) {
      return console.log(error)
    } else {
      console.log(location + ': ', longitude, latitude)
      console.log()
      const locationReplaced = location.replace(/\s/g, '')

      weatherService.getWetherData(locationReplaced, (error, {tempReal, tempFeel, location} = {}) => {
        if (error) {
          return console.log(error)
        } else {
          console.log('Temp in ' + location + ' is ' + tempReal + '°C and feels like ' + tempFeel + '°C')
        }
      })
    }
  }
  )
}

setTimeout(() => { console.log('timout 2sec.'); }, 2000)

console.log('Stop main')