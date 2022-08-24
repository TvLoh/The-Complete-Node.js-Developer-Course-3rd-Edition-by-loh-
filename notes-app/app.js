// start app open terminal
// enter: node app.js
// or: nodemon app.js
// end nodemon: strg + c
const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Notes title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'add Body Description',
      demandOption: true,
      type: 'string',
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Remove command needs a --title',
      demandOption: true,
      type: 'string',
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'Show list',
  handler: () => {
    notes.listNodes()
  }
})

// Create read commands
yargs.command({
  command: 'read',
  describe: 'read  note',
  handler: () => {
    notes.readNode()
  }
})

//you need to execute yargs once  
yargs.parse()

// console.log(yargs.argv);