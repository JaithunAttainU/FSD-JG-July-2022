const mongoose = require("mongoose");
const { Schema } = require('mongoose')

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 25,
    unique: true
  },
  releaseDate: {
    type: Date,
    default: Date.now()
  },
  language: String,
  cast: [String],
  rating: {
    type: Number,
    max: 5,
    min: 0
  },
  reviews: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'reviews'
  }],
  is3D: Boolean
})

//Map mongodb collection to the Schema created above. .model returns an obj using which we can perform all operations in movie colection
const MovieModel = mongoose.model('movies', movieSchema)
module.exports = MovieModel