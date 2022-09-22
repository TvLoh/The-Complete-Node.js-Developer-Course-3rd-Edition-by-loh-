const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}


// Bad excample
/* add(1, 2).then((sum) => {
  console.log(sum)
  
  add(sum, 5).then((sum2) => {
    console.log(sum2)
  }).catch((err) => {
    console.log('ERROR!!!',err)
  })

}).catch((err) => {
  console.log('ERROR!!!', err)
}) */


// focus on return and then
add(1, 2).then((sum) => {
  console.log(sum)
  return add(sum, 5)
}).then((sum2) => {
  console.log(sum2);
}).catch((err) => {
  console.log('ERROR!!!', err);
})