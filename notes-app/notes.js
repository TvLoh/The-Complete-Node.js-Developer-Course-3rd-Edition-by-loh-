const fs = require('fs')
const chalk = require('chalk')

const AddNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes)
    logMessage(logType.success.type, 'Title is added successfully!')
  } else {
    logMessage(logType.error.type, 'Title already exists!')
  }
}

const RemoveNote = (title) => {
  const notes = loadNotes()
  const removeNote = notes.filter((note) => {
    return note.title !== title
  })
  if (notes.length !== removeNote.length) {
    saveNotes(removeNote)
    logMessage(logType.success.type, 'Title is removed successfully!')
  } else {
    logMessage(logType.error.type, 'No Title to remove.')
  }
}

const ListNodes = () => console.log('listNode')

const ReadNode = () => console.log('readNode')

//-------------------------Help functions----------------------
const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString())
  } catch (err) {
    return []
  }
}

const logMessage = (type, message) => {
  switch (type) {
    case logType.success.type:
      console.log(logType.success.design(message));
      break
    case logType.info.type:
      console.log(logType.info.design(message));
      break;
    case logType.warning.type:
      console.log(logType.warning.design(message));
      break;
    case logType.error.type:
      console.log(logType.error.design(message));
      break;
    default:
      console.log(logType.error.design('system error: please conect the IT support'));
  }
}

const logType = {
  success: {
    type: 'success',
    design: chalk.green.bold
  },
  info: {
    type: 'info',
    design:chalk.bold.hex('#DEADED').italic
  },
  warning: {
    type: 'warning',
    design: chalk.green.bold
  },
  error: {
    type: 'error',
    design: chalk.bold.red.italic
  }
}

module.exports = {
  addNote: AddNote,
  removeNote: RemoveNote,
  listNodes: ListNodes,
  readNode: ReadNode
}