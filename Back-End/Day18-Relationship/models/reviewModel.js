const mongoose = require("mongoose");
const { Schema } = require('mongoose')

const reviewSchema = new Schema({
  userName: String,
  comment: {
    type: String,
    maxLength: 100,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  postedTime: {
    type: Date,
    default: Date.now()
  },
  movieID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: 'movies'
  }
})

//Map mongodb collection to the Schema created above. .model returns an obj using which we can perform all operations in movie colection
const ReviewModel = mongoose.model('reviews', reviewSchema)
module.exports = ReviewModel