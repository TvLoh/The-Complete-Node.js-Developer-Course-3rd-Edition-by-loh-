const geoService = require('./utils/geoService.js')
const weatherService = require('./utils/weatherService.js')

const location = 'Ostfildern'

geoService.getGeoLocation(location, (error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log(data.longitude)
    console.log(data.latitude)
    console.log(data.location)
  }
}
)

weatherService.getWetherData(location, (error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log(data.tempReal)
    console.log(data.tempFeel)
  }
})
