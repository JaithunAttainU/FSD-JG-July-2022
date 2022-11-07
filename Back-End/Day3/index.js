const express = require('express') //CommonJS Module
const posts = require('./mock/posts.js')

const app = express()

app.get('/', (request, response) => {
  console.log(request.url)
  // response.send('Hello World!')
  response.sendFile('/Users/jmahirakz/FSD-JG-July-2022/Back-End/Day3/view/homepage.html')
})

app.get('/posts', (request, response) => {
  console.log(request.url, request.method)
  response.send(posts)
})

app.get('/posts/:postId', (request, response) => {
  const { postId } = request.params //{ postId: '1' }

  const requestPost = posts.filter((post) => {
    return post.id === Number(postId)
  })

  if (requestPost.length == 0) {
    response.send({ msg: 'Data Not Found!' })
  } else {
    response.send(requestPost[0])
  }
})

app.listen(8000, () => {
  console.log("Server Started Successfully")
})

//const {phone, age} = { postId: '1', name:'Veeresh', age: 25, phone: '68667' }

phone
age

