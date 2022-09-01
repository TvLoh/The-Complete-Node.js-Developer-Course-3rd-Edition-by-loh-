const request = require("postman-request")


const getWetherData = (address, callback) => {
  const urlWeather = 'http://api.weatherstack.com/current?access_key=9c853bd9723aa33ef1e1edd58b6ec3fc&query=Ostfildern,Baden-W%C3%BCrttemberg,Germany'
  console.log(urlWeather)


  request({
    url: urlWeather,
    json: true
  },
  (error, response) => {
    if (error) {
      callback(error, undefined)
    } else if (response.body.error) {
      callback(error, undefined) 
    } else {
      callback(undefined, {
        tempReal: response.body.current.temperature,
        tempFeel: response.body.current.feelslike,
        location: response.body.location.name,
      })
    }
  })
}

module.exports = {
  getWetherData,
}