// start app open terminal
// enter: node app.js
// or: nodemon app.js
// end nodemon: strg + c
const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
const error = chalk.bold.hex('#DEADED').italic
const information = chalk.bold.cyanBright.bgWhite

console.log(msg)
console.log(information(validator.isEmail('fips.froelich@gmail.com')))
console.log(error(validator.isURL('https://www.nope.de')))
console.log(process.argv[2]);
console.log(process.argv[3]);