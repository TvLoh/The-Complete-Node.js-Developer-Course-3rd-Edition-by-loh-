const mongoose = require('mongoose');
const validator = require('validator');

const url = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(url);

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email validation ERROR!')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Invalid age value: no neg age alowed!')
      }
    }
  },
  password: {
    type: String,
    trim:true,
    required: true,
    minlength: 6,
    validate(value){
      if (value.toLowerCase().includes('passwort')) {
        throw new Error('ERROR! Passwort not allowed in passwort!')
      }
    }

  }
})

const me = new User({
  name: '  Thomas Loh',
  email: '   THOMAS@provider.de',
  password: 'This is the new Passkey!'
})

me.save().then(() => {
  console.log(me);
}).catch((err) => {
  console.log('ERROR! ', err);
})

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

/* const newTask = new Task({
  description: 'This task is finished!',
  completed: true
})

newTask.save().then(() => {
  console.log(newTask);
}).catch((err) =>{
  console.log('ERROR! ', err);
}) */
