const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = User