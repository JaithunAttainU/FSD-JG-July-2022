const express = require('express')
//middleware to parse multipart/form-data
const multer = require('multer')
const { Base64 } = require('js-base64')

//import cloudinary library
const cloudinary = require('cloudinary').v2;

//config - cloudinary
cloudinary.config({
  cloud_name: 'sample',
  api_key: '45357567768',
  api_secret: 'fsrgghdghvg-dfseg'
})

const app = express()

//Two Types of Storage - Disk, Memory
const upload = multer({
  storage: multer.memoryStorage()
})

app.use(express.static('public'))
app.use(express.urlencoded()) //middleware to parse url encoded form data

//temp arr to store products
const products = []

app.post('/products', upload.single('image'), (req, res) => {
  //Product Info
  const productData = req.body
  products.push(productData)
  console.log("Product POST call executed", productData)

  //File Data Info
  const fileData = req.file

  if (fileData) {
    //file data in hexadecimal digits
    console.log(fileData.buffer[0])[a, 10, 00, eb]

    //convert buffer to base 64 string
    const base64String = Base64.encode(fileData.buffer)
    // console.log(base64String.substring(1, 20))

    //upload to cloudinary with base64 string

  }
  res.end()
})


app.get('/products', (req, res) => {
  res.send(products)
})

app.listen(8000, (req, res) => {
  console.log("Server is Started")
})