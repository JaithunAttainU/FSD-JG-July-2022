const express = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('./controllers/moviesController')
const { initDB } = require('./dbConfig')

const app = express()

const dotenv = require('dotenv')
dotenv.config()

initDB()
app.use(express.json())


app.get('/movies', getMovies)
app.get('/movies/:movieID', getMoviesByID)
app.post('/movies', postMovie)
app.put('/movies/:movieID', updateMovieById)
app.delete('/movies/:movieID', deleteMovieByID)

app.listen(8000, () => {
  console.log("Server Started Successfully")
})