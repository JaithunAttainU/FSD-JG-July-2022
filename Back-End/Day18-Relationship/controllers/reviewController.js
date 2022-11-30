const MovieModel = require("../models/movieModel")
const ReviewModel = require("../models/reviewModel")

const addReview = async (req, res) => {
  const { movieID } = req.params
  const { comment, userName } = req.body

  //db

  try {
    //1
    const newReview = await ReviewModel.create({ comment, userName, movieID })

    //2 & 3
    const movieDoc = await MovieModel.findByIdAndUpdate(movieID, {
      $push: {
        reviews: newReview._id
      }
    })
    res.send({ status: 'success', review: newReview })
  } catch (error) {
    console.log(error)
    res.send({ status: 'error', msg: 'Review was not added successfully' })
  }
}

const getAllReviews = async (req, res) => {
  const { movieID } = req.params

  try {
    const reviews = await ReviewModel.find({ movieID })
    res.send({ status: 'success', reviews })

  } catch (error) {
    res.send({ status: 'error', msg: 'Reviews cannot be fetched' })

  }
}
module.exports = {
  addReview,
  getAllReviews
}

//1) Add review document in review collection
//2) get the _id from review document
//3) Go and insert the _id from review document in moview