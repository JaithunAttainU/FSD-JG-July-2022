const express = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('./controllers/moviesController')
const { initDB } = require('./dbConfig')

const app = express()

const dotenv = require('dotenv')
const { signup, login, logout } = require('./controllers/authController')
dotenv.config()

initDB()
app.use(express.json())

//Auth Routes
app.post('/signup', signup)
app.post('/login', login)
app.post('/logout', logout)

//Moview routes
app.get('/movies', getMovies)
app.get('/movies/:movieID', getMoviesByID)
app.post('/movies', postMovie)
app.put('/movies/:movieID', updateMovieById)
app.delete('/movies/:movieID', deleteMovieByID)

app.listen(8000, () => {
  console.log("Server Started Successfully")
})