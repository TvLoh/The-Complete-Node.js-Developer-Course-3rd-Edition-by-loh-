// compare with 4-callbacks

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([7, 4, 1]);
    reject('Things went wrong.');
  }, 2000);
})

doWorkPromise.then(
  (result) => { console.log('Sucsess', result) }
).catch(
  (err) => { console.log('ERROR! ', err) }
)

//
//                          fulfilled
//                        /
//Promis  -- penmding -->
//                        \
//                          rejected
//