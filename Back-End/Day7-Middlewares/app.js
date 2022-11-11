const express = require('express')
const app = express()
const authMiddleware = require('./middlewares/authMiddleware')
const logMiddleware = require('./middlewares/logMiddleware')
const { userValidation, postsValidation } = require('./middlewares/validationMiddleware')

//Morgan Config
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

//Application Level Middleware
// app.use(logMiddleware)
app.use(morgan('tiny', { stream: accessLogStream }))
app.use(authMiddleware)
app.use(express.json())

//Popular Middleware Libraries
//morgan - logging
//helmet
//cors

app.get('/users', (req, res, next) => {
  console.log("Get Call Executed")
  res.send("Hello World")
})

app.post('/users', userValidation, (req, res, next) => {
  console.log("Add Users Post Call Executed")
  res.end()
})

app.post('/posts', postsValidation, (req, res, next) => {
  console.log("Add Feed Post Call Executed")
  res.status(204).end()
})

app.listen(8000, () => {
  console.log("Server is started!")
})
