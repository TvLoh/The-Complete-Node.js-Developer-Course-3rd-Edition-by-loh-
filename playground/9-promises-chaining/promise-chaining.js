require('../../src/db/mongoose')
const User = require('../../src/models/user')

// 632acaf9e831f1416b6e52b5

User.findByIdAndUpdate('632c152181198acb43c42f8b', { age: 1 }).then((user) => {
  console.log(user)
  return User.countDocuments({ age: 1 })
}).then((result) => {
  console.log(result)
}).catch((err) => {console.log(err)})

