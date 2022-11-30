const mongoose = require("mongoose");
const { Schema } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 25
  },
  age: Number,
  address: String,
  contact: Number,
  emailId: String
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel