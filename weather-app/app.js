const geoService = require('./utils/geoService.js')
const weatherService = require('./utils/weatherService.js')

const location = process.argv[2]

console.log('Start main')

setTimeout(() => { console.log('timout 0.5sec.'); }, 500)

setTimeout(() => { console.log('timout 0sec.'); }, 0)

if (!location) {
  console.log('Please enter a Location!!!');
} else {
  geoService.getGeoLocation(location, (error, dataLocation) => {
    if (error) {
      return console.log(error)
    } else {
      console.log(dataLocation.longitude)
      console.log(dataLocation.latitude)
      console.log(dataLocation.location)
      const location = dataLocation.location.replace(/\s/g, '')

      weatherService.getWetherData(location, (error, dataWeather) => {
        if (error) {
          return console.log(error)
        } else {
          console.log(dataWeather.tempReal)
          console.log(dataWeather.tempFeel)
          console.log(dataWeather.location)
        }
      })
    }
  }
  )
}

setTimeout(() => { console.log('timout 2sec.'); }, 2000)

console.log('Stop main')