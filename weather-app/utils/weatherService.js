const request = require("postman-request")


const getWetherData = (address, callback) => {
  const urlWeather = 'http://api.weatherstack.com/current?access_key=9c853bd9723aa33ef1e1edd58b6ec3fc&query=Ostfildern,Baden-W%C3%BCrttemberg,Germany'
  // console.log(urlWeather)


  request({
    url: urlWeather,
    json: true
  },
  (error, request = {}) => {
    const { body } = request
    if (error) {
      callback(error, undefined)
    } else if (body.error) {
      callback(error, undefined) 
    } else {
      const {temperature, feelslike} = body.current
      callback(undefined, {
        tempReal: temperature,
        tempFeel: feelslike,
        location: body.location.name,
      })
    }
  })
}

module.exports = {
  getWetherData,
}