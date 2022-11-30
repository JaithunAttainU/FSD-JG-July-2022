const { Router } = require('express')
const { getMovies, getMoviesByID, postMovie, updateMovieById, deleteMovieByID } = require('../controllers/moviesController')
const { authMiddleware, isAdminMiddleware } = require('../middlewares/authMiddleware')
const movieRouter = Router()

movieRouter.use(authMiddleware)

//Moview routes
movieRouter.get('/', getMovies)
movieRouter.get('/:movieID', getMoviesByID)

//Route level Middleware
movieRouter.post('/', isAdminMiddleware, postMovie)
movieRouter.put('/:movieID', isAdminMiddleware, updateMovieById)
movieRouter.delete('/:movieID', isAdminMiddleware, deleteMovieByID)

module.exports = movieRouter