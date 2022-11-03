//npm init - To create a node project - create package.json file with basic meta info
//npm i packagename - Install the package and also add it to the dependency list in package.json
//npm i - look into all the dependencies in package.json and install all of them

//How to create a node server using express framework - template

const express = require('express')
const app = express()


//.methodname(path, (req, res)=>{})
app.get('/', (request, response) => {
  console.log("Get Call executed")
  // response.setHeader('key', 'value')
  response.send("Hello World!")
})


app.listen(8001)

//Http Server
//Http Verbs
// GET
// POST
// PUT
// DELETE

//https://www.google.com/search?q=alternatives+to+express&oq=alternatives

// https / http: protocol
// www.google.com : domain name
//   / search - path
//   ? queryparams, separated by &

// 1. q = alternatives + to + express
// 2. oq = alternatives