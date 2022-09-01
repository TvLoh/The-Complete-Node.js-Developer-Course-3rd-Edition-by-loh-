const request = require('postman-request')

const getGeoLocation = (address, callback) => {
  const urlLocation = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRlc3NpIiwiYSI6ImNsN2lwMzl3aDAwNW8zb3F6cTBtN2I4YmUifQ.pNHxHMCuleZu-rM86OngDA'
  console.log(urlLocation)

  request.get({
    url: urlLocation,
    json: true,
  },
    (error, response) => {
      if (error) {
        callback(error.message, undefined)
      } else if (response.body.error) {
        callback(response.body.error.info, undefined)
        console.log('error location local: ', response.body.error.info);
      } else if (response.body.features.length === 0) {
        callback('Unable to find Location. Try another search.', undefined)
      } else {
        callback(undefined, {
          longitude: response.body.features[0].center[1],
          latitude: response.body.features[0].center[0],
          location: response.body.features[0].place_name,
        })
      }
    }
  )
}

module.exports = {
  getGeoLocation: getGeoLocation,
}