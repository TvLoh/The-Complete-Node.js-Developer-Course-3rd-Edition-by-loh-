const fs = require('fs')
const chalk = require('chalk')

const AddNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => {
    return note.title === title
  })

  if (!duplicateNote) {
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

const ListNodes = () => {
  let i = 0
  let sortedNotes = loadNotes()
  const notes = loadNotes()
  sortedNotes.sort(function (a, b) {
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
  if (notes.length > 0) {
    console.log(chalk.bold.hex('#92c353').italic.inverse('List of Title: '));
    notes.forEach((node) => {
      i++;
      console.log(i + ': ' + node.title + ' - ' + node.body)
    })
  } else {
    logMessage(logType.error.type, 'No Title to list!')
  }

  if (sortedNotes.length > 0) {
    console.log(chalk.bold.hex('#92c353').italic.inverse('List of sorted Title: '));
    sortedNotes.forEach((node) => {
      i++;
      console.log(i + ': ' + node.title + ' - ' + node.body)
    })
  } else {
    logMessage(logType.error.type, 'No sorted Title to list!')
  }
}

const ReadNote = (title) => {
  const notes = loadNotes()
  const findNote = notes.find((note) => note.title === title)
  if (findNote) {
    logMessage(logType.info.type, findNote.title)
    logMessage(logType.info.type, findNote.body)
  } else {
    logMessage(logType.error.type, 'No title found to read!')
  }
}

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
    design: chalk.bold.hex('#DEADED').italic
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
  readNode: ReadNote
}