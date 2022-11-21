const { ObjectId } = require('mongodb');
const { initDB } = require('../dbConfig')

let moviesCollection;
async function getMovieCollection() {
  const collectionName = 'movies'
  moviesCollection = await initDB(collectionName)
}
getMovieCollection()


const getMovies = async (req, res) => {

  const { language, releaseDate } = req.query

  const conditions = {}

  if (language) {
    conditions.language = language
  }

  if (releaseDate) {
    conditions.releaseDate = releaseDate
  }

  try {
    const movies = await moviesCollection.find(conditions).toArray()
    res.send({ status: 'success', movies: movies })
  } catch (err) {
    console.log("Error fetching movies from DB")
    res.status(500).send({ status: 'error', msg: 'Error fetching movies from DB' })
  }
}

const getMoviesByID = async (req, res) => {
  const { movieID } = req.params

  try {
    const movie = await moviesCollection.findOne({ _id: new ObjectId(movieID) })
    if (!movie) {
      res.status(404).send({ status: 'error', msg: 'Movie not found' })
    } else {
      res.send({ status: 'success', movie: movie })
    }
  } catch (err) {
    console.log("Error fetching movies from DB")
    res.status(500).send({ status: 'error', msg: 'Error fetching movies from DB' })
  }

}

const postMovie = async (req, res) => {
  const movieData = req.body
  try {
    await moviesCollection.insertOne(movieData)
    res.status(201).send({ status: 'success' })
  } catch (err) {
    //log in a file for debug err
    res.status(500).send({ status: 'error', msg: 'Internal Error' })
  }

}

const updateMovieById = async (req, res) => {

  const { movieID } = req.params
  const updatedMovieData = req.body //{language, name, id}
  try {
    //DB Operation
    await moviesCollection.updateOne({ _id: new ObjectId(movieID) }, { $set: updatedMovieData })
    res.send({ status: 'Updated Successfully' })
  } catch (err) {
    res.status(500).send({ status: 'error', msg: 'Cannot Update Movie' })
  }

}

const deleteMovieByID = async (req, res) => {
  const { movieID } = req.params
  try {
    //delete Operation
    await moviesCollection.deleteOne({ _id: new ObjectId(movieID) })
    res.send({ status: 'Deleted Successfully' })
  } catch (err) {
    res.status(500).send({ status: 'Cannot delete movie due to internal error' })
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

// function Person(name) {
//   this.name = name
// }


// const personObj = new Person("Dhruv")