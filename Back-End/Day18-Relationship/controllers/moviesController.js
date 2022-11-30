const MovieModel = require('../models/movieModel')

const getMovies = async (request, response) => {
  try {
    const movies = await MovieModel.find()
    response.send({ status: 'success', movies })
  } catch (err) {
    response.status(500).send({ status: 'error', msg: 'error fetching movies' })
  }
}

const getMoviesByID = async (request, response) => {
  const { movieID } = request.params

  try {
    const movie = await MovieModel.findById(movieID, { name: 1, releaseDate: 1 }).populate('reviews', { comment: 1, userName: 1, _id: 0 })
    if (!movie) {
      response.status(404).send({ status: 'error', msg: 'Movie not found' })
    } else {
      response.send({ status: 'success', movie: movie })
    }
  } catch (err) {
    console.log("Error fetching movies from DB")
    response.status(500).send({ status: 'error', msg: 'Error fetching movies from DB' })
  }
}

const postMovie = async (request, response) => {
  const movieData = request.body

  try {
    //insert a document
    const resultMovie = await MovieModel.create(movieData)
    console.log(resultMovie)
    response.status(201).send({ status: 'success', movie: resultMovie })
  } catch (err) {
    console.log(err)
    //log in a file for debug err
    response.status(500).send({ status: 'error', msg: err.errors })
  }
}

const updateMovieById = async (request, response) => {
  // /movie/{movieId}
  const { movieID } = request.params
  const updatedMovieData = request.body //{language, name, id}
  try {
    //DB Operation
    // await MovieModel.updateOne({ _id: new ObjectId(movieID) }, { $set: updatedMovieData })
    const updateMovie = await MovieModel.findByIdAndUpdate(movieID, updatedMovieData, { new: true, runValidators: true }) //to perform schema validations input operation add runValidators as true
    response.send({ status: 'Updated Successfully', movie: updateMovie })
  } catch (err) {
    response.status(500).send({ status: 'error', msg: 'Cannot Update Movie' })
  }
}

const deleteMovieByID = async (request, response) => {
  const { movieID } = request.params
  try {
    //delete Operation
    const deletedMovie = await MovieModel.findByIdAndDelete(movieID)
    response.send({ status: 'Deleted Successfully', movie: deletedMovie })
  } catch (err) {
    response.status(500).send({ status: 'Cannot delete movie due to internal error' })
  }
}

//Common JS Module
module.exports = {
  getMovies,
  getMoviesByID,
  postMovie,
  updateMovieById,
  deleteMovieByID
}