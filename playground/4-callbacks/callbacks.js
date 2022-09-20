// compare with 8-promises

const doWorkCayllback = (callback) => {
  setTimeout(() => {
    // callback('This is my error.', undefined)  
    callback(undefined, [1, 4, 7])
  }, 2000)
}

doWorkCayllback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
})
