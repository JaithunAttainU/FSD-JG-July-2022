const { response } = require('express')
const express = require('express') //CommonJS Module
let posts = require('./mock/posts.js')
const { editPost, addPost, deletePost, getAllPost, getPostById } = require('./controllers/postController')

const app = express()

// //middleware(Function) - Add
// //.use - to add middlewares
app.use(express.json()) //parse json data in req body
app.use(express.urlencoded()) //parse url encoded form data in req body

//expose all files inside public folder to client
app.use(express.static('public', { index: false }))

// console.log("Directory Name", __dirname)
// console.log("File", __filename)

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/public/html/homepage.html`)
})

app.get('/addPost', (request, response) => {
  response.sendFile(`${__dirname}/public/html/AddPost.html`)
})

// Need not handle individual routes for every static file
// app.get('/script.js', (request, response) => {
//   response.sendFile('/Users/jmahirakz/FSD-JG-July-2022/Back-End/Day6/files/script.js')
// })

// app.get('/style.css', (request, response) => {
//   response.sendFile('/Users/jmahirakz/FSD-JG-July-2022/Back-End/Day6/files/style.css')
// })

app.get('/posts', getAllPost)
app.get('/posts/:postId', getPostById)
app.delete('/posts/:postId', deletePost)
app.post('/posts', addPost)
app.put('/posts/:postId', editPost)

app.listen(8000, () => {
  console.log("Server Started Successfully")
})