const mongoose = require("mongoose");
const { Schema } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    maxLength: 25
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel