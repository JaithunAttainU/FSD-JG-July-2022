const MovieModel = require('../models/movieModel')

// .find(condition, project)
const getMovies = async (request, response) => {

  const { year = 2010, rating = 7.0, page = 1, size = 2 } = request.query

  //[{year: 2010, count: 5}, {year: 2015, count: 3}]


  try {

    // const movies = await MovieModel.find({}, { title: 1 }).skip(size * (page - 1)).limit(size)

    const movies = await MovieModel.aggregate([
      {
        $project: {
          title: 1
        }
      },
      {
        $skip: size * (page - 1)
      },
      {
        $limit: size
      }
    ])
    // const movies = await MovieModel.aggregate([{
    //   $group: {
    //     _id: "$year", //{ year: "$year" }
    //     countNumber: {
    //       $sum: 1
    //     },
    //   }
    // },
    // {
    //   $sort: {
    //     countNumber: -1
    //   }
    // }])
    // const movies = await MovieModel.aggregate([
    //   {
    //     $match: {
    //       year: Number(year),
    //       "imdb.rating": {
    //         $gt: Number(rating)
    //       }
    //     }
    //   },
    //   {
    //     $project: {
    //       title: 1,
    //       "imdb.votes": 1,
    //       "imdb.rating": 1,
    //       cast: 1,
    //       year: 1,
    //       num_mflix_comments: 1
    //     }
    //   },
    //   {
    //     $sort: {
    //       title: 1
    //     }
    //   },
    //   {
    //     $limit: 1
    //   },
    //   {
    //     $lookup: {
    //       from: 'comments', //collection name
    //       localField: "_id", //movie collection _id
    //       foreignField: "movie_id", //comments collection movie_id
    //       as: "moviecomments" //name for the new data coming from another collection
    //     }
    //   },
    //   {
    //     $unwind: "$cast"
    //   },
    //   {
    //     $limit: 1
    //   },
    // ])
    response.send({ status: 'success', movies })
  } catch (err) {
    response.status(500).send({ status: 'error', msg: 'error fetching movies' })
  }
}

const getMoviesByID = async (request, response) => {
  const { movieID } = request.params

  try {
    const movie = await MovieModel.findById(movieID)
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