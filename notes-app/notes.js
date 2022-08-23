const fs = require('fs')

const getNotes = function () {
  return 'Your notes ....'
}

const addNote = function (title, body) {
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
  } else {
    console.log('Title already exists!');
  }
}

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

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  loadNotes: loadNotes,
}