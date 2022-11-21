const express = require('express') //commonJs Modules
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('./controllers/moviesController')

const app = express()

app.use(express.json())


app.get('/movies', getMovies)
app.get('/movies/:movieID', getMoviesByID)
app.post('/movies', postMovie)
app.put('/movies/:movieID', updateMovieById)
app.delete('/movies/:movieID', deleteMovieByID)

app.listen(8000, () => {
  console.log("Started Successfully")
})