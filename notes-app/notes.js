const fs = require('fs')
const chalk = require('chalk')

const AddNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes)
    logMessage('success', 'Title is added successfully!')
  } else {
    logMessage('error', 'Title already exists!')
  }
}

const RemoveNote = function (title) {
  const notes = loadNotes()
  const removeNote = notes.filter(function (note) {
    return note.title !== title
  })
  if (notes.length !== removeNote.length) {
    saveNotes(removeNote)
    logMessage('success', 'Title is removed successfully!')
  } else {
    logMessage('error', 'No Title to remove.')
  }
}

const ListNodes = function () {
  console.log('listNode');
}

const ReadNode = function () {
  console.log('readNode');
}


//-------------------------Help functions----------------------
const saveNotes = function (notes) {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = function () {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString())
  } catch (err) {
    return []
  }
}

const logMessage = function (type, message) {
  switch (type) {
    case 'success':
      console.log(chalk.green.bold(message));
      break
    case 'info':
      console.log(chalk.magenta.bold(message));
      break;
    case 'warning':
      console.log(chalk.yellow.bold(message));
      break;
    case 'error':
      console.log(chalk.red.bold(message));
      break;
    default:
      console.log(chalk.red.bold('system error: please conect the IT support'));
  }
}

module.exports = {
  addNote: AddNote,
  removeNote: RemoveNote,
  listNodes: ListNodes,
  readNode: ReadNode
}