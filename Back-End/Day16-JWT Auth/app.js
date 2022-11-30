const express = require('express')
const { initDB } = require('./dbConfig')
const cookieParser = require('cookie-parser')

const authRouter = require('./routes/authRouter')
const movieRouter = require('./routes/movieRouter')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

initDB()

//middleware
app.use(express.json())
app.use(cookieParser())

//Routers
app.use('/', authRouter)
app.use('/movies', movieRouter)
// app.use('/booking', bookingRouter)




//Booking Routes

//Users

//Shows

app.listen(8000, () => {
  console.log("Server Started Successfully")
})