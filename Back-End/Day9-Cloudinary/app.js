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

app.post('/products', /*upload.single('image')*/ upload.array('image'), async (req, res) => {
  try {
    //Product Info
    const productData = req.body
    products.push(productData)
    console.log("Product POST call executed", productData)

    //File Data Info
    // const fileData = req.file

    const filesData = req.files
    if (filesData) {
      console.log(filesData)
      productData.imageUrl = []
      for (let index = 0; index < filesData.length; index++) {
        const singleFileData = filesData[index];
        // file data in hexadecimal digits
        console.log(singleFileData.buffer[0])

        // convert buffer to base 64 string
        const base64String = Base64.encode(singleFileData.buffer)
        console.log(base64String.substring(1, 20))

        // upload to cloudinary with base64 string
        const cloudRes = await cloudinary.uploader.upload(`data:${singleFileData.mimetype};base64,${base64String}`)

        productData.imageUrl.push(cloudRes.secure_url)
      }
      res.send({ status: 'success', msg: 'Product Added Successfully' })
    }
  } catch (error) {
    res.send({ status: 'error', msg: 'Error adding Product' })
  }
})


app.get('/products', (req, res) => {
  res.send(products)
})

app.listen(8000, (req, res) => {
  console.log("Server is Started")
})