const request = require('postman-request')

const urlWeather = 'http://api.weatherstack.com/current?access_key=9c853bd9723aa33ef1e1edd58b6ec3fc&query=New%20York'

request.get(
  {
    url: urlWeather,
    json: true,
  },
  (error, response) => {
    if (error) {
      console.log('error weather: ', error)
    } else if (response.body.error) {
      console.log('error weather local', response.body.error.info);
    } else {
      console.log('response weather', response.body.current)
    }
  }
)

const urlLocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12k/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRlc3NpIiwiYSI6ImNsN2lwMzl3aDAwNW8zb3F6cTBtN2I4YmUifQ.pNHxHMCuleZu-rM86OngDA'

request.get({
  url: urlLocation,
  json: true,
},
  (error, response) => {
    if (error) {
      console.log('error location: ', error.message);
    } else if (response.body.error) {
      console.log('error location local: ', response.body.error.info);
    } else if (response.body.features.length === 0) {
      console.log('Unable to find Location. Try another search.');
    } else {
      console.log('response location: ', response.body.features[0].center[1], response.body.features[0].center[0])
    }
  }
)

