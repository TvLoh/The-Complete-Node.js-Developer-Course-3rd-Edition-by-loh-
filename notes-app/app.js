// start app open terminal
// enter: node app.js
// or: nodemon app.js
// end nodemon: strg + c
const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const getNotes = require('./notes.js')

yargs.version('1.1.0')

const msg = getNotes()
const error = chalk.bold.hex('#DEADED').italic
const information = chalk.bold.cyanBright.bgWhite

console.log(msg)
console.log(information(validator.isEmail('fips.froelich@gmail.com')))
console.log(error(validator.isURL('https://www.nope.de')))
console.log(process.argv);
console.log(process.argv[2]);
console.log(process.argv[3]);

// node app.js --title="Things to by"
// node app.js --help
// node app.js --version
console.log(yargs.argv);