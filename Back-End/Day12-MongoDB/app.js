const express = require('express') //commonJs Modules

//load all key-value pairs in .env file to process.env obj
const dotenv = require('dotenv')
dotenv.config()

// require('dotenv').config()

const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('./controllers/moviesController')

const app = express()

app.use(express.json())


app.get('/movies', getMovies)
app.get('/movies/:movieID', getMoviesByID)
app.post('/movies', postMovie)
app.put('/movies/:movieID', updateMovieById)
app.delete('/movies/:movieID', deleteMovieByID)

//global obj to access all env. variables
console.log(process.env)

app.listen(8000, () => {
  console.log("Started Successfully")
})