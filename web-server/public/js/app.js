console.log('client side java script is loaded')
const url = 'http://api.weatherstack.com/current?access_key=9c853bd9723aa33ef1e1edd58b6ec3fc&query='


const getWeatherData = (searchURL) => {
  fetch(searchURL).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        showError.textContent = data.error.info;
      } else {
        console.log(data);
        showForcarst.textContent = 'Temperature in ' + data.location.name + ' is about ' + data.current.temperature + '°C and feels like ' + data.current.feelslike + '°C';
      }
    })
  })
}

const weatherform = document.querySelector('form')
const searchInp = document.querySelector('input')
const showForcarst = document.querySelector('#showForcarst')
const showError = document.querySelector('#showError')



weatherform.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = searchInp.value;
  const searchURL = url + location;
  getWeatherData(searchURL);
})