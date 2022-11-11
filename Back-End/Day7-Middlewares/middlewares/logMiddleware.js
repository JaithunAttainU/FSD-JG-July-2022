const logMiddleware = (req, res, next) => {
  console.log("Path is ", req.url)
  console.log("Time", new Date())
  next()
}

module.exports = logMiddleware