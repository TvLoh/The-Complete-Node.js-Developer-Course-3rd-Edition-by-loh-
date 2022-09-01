const surName = 'myName'
const myAge = 26


// construct an object using scoped variables
console.log('-------------------- construction of an Object --------------------');
const constructObject = {
  surName,
  age: myAge,
  lastname: 'yourName',
}

console.log(constructObject)


// deconstruckt an object
console.log('-------------------- deconstruction of an Object --------------------');
const deconstructObject = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
}

const {label: producktLabel, stock, rating = 5} = deconstructObject
console.log(producktLabel)
console.log(stock)
console.log(rating)

// transaction object
console.log('-------------------- transaction of an Object --------------------');

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', deconstructObject)
