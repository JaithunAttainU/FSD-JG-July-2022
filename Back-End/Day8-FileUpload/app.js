const express = require('express')
//middleware to parse multipart/form-data
const multer = require('multer')
const app = express()

//Destination to store all the incoming client files
// const upload = multer({ dest: 'client-images' })

//Two Types of Storage - Disk, Memory
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callBack) {
      console.log(file)
      return callBack(null, 'client-images')
    },
    filename: function (req, file, callBack) {
      console.log("FileData inside cofigs", file)
      return callBack(null, `${Date.now()}-${file.originalname}`)
    }
  }),
  limits: {
    fileSize: 1000
  }
})

app.use(express.static('public'))
app.use(express.urlencoded()) //middleware to parse url encoded form data
express.json()
//Libraries to accept files in express
//multer
//express-fileuploads
//multiparty

//temp arr to store products
const products = []

// app.post('/products', upload.single('image'), (req, res) => {
//   //Product Info
//   const productData = req.body
//   products.push(productData)
//   console.log("Product POST call executed", productData)

//   //File Data Info
//   const fileData = req.file
//   console.log(fileData)

//   res.end()
// })

const multerErroHandler = function (error) {
  if (error) {
    res.status(400).send({ msg: "Invalid File" })
  } else {
    //Product Info
    const productData = req.body
    products.push(productData)
    console.log("Product POST call executed", productData)

    //File Data Info
    const fileData = req.file
    console.log(fileData)

    res.end()
  }
}

const imageMiddleware = upload.single('image')
app.post('/products', (req, res) => {
  imageMiddleware(req, res, multerErroHandler)
})

app.get('/products', (req, res) => {
  res.send(products)
})

app.listen(8000, (req, res) => {
  console.log("Server is Started")
})