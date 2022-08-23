const fs = require('fs');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
}

/* 
// first see the difference between json and stringify

console.log('------------start-------------');
console.log('----------stringify------------');
const bookJSON = JSON.stringify(book)
console.log(bookJSON)
console.log(bookJSON.title)
console.log(bookJSON.author)


console.log('-------------parse-------------');
const parsedData = JSON.parse(bookJSON)
console.log(parsedData)
console.log(parsedData.title)
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON) */



/* 
// load from json as stringify and parse into json

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data)
console.log(data.title)
console.log(data.author) */




// Task
console.log(fs.readFileSync('1-jsonTask.json'));
const dataTask = JSON.parse(fs.readFileSync('1-jsonTask.json').toString())
dataTask.name = 'newAndrew'
dataTask.age = 37
fs.writeFileSync('1-jsonTaskResult.json', JSON.stringify(dataTask))