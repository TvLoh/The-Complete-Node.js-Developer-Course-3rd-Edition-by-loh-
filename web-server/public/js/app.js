console.log('client side java script is loaded')
const url = '/weather?address='


const getWeatherData = (searchURL) => {
  fetch(searchURL).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        showError.textContent = data.error.info;
      } else {
        console.log(data);
        showForcarst.textContent = data.forecast;
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