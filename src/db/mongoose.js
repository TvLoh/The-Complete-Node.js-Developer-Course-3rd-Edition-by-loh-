const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(url);

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,

  },
})

const Task = mongoose.model('Tasks', {
  description: {
    type: String,
  },
  complete: {
    type: Boolean,
  }
})

const newTask = new Task({
  description: 'This task is finished!',
  complete: true
})

newTask.save().then(() => {
  console.log(newTask);
}).catch((err) =>{
  console.log('ERROR! ', err);
})

/* const me = new User({
  name: 'Thomas',
  age: 30
})

me.save().then(() => {
    console.log(me);
  }).catch((err) => {
    console.log('ERROR! ', err);
  }) */