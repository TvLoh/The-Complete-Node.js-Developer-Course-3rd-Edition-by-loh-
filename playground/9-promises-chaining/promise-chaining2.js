require('../../src/db/mongoose')
const Task = require('../../src/models/task')

// 632ac09928b46b0690d00e66

Task.findByIdAndDelete('632ac09928b46b0690d00e66').then((task) => {
  console.log('REMOVED: ', task)
  return Task.find({ completed: false })
}).then((result) => {
  console.log('OPEN TASKS: ', result)
}).catch((err) => {console.log(err)})

