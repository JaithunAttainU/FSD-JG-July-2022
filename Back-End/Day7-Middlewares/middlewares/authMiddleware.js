
const authMiddleware = (req, res, next) => {
  //Authenticate Sign IN

  //DB Call and set isValidUser accordingly
  const isValidUser = true

  console.log("Auth Middleware Executed")
  if (isValidUser) {
    next()
  } else {
    res.status(401).send({ status: 'error', msg: 'Not a Valid User' })
  }

}

module.exports = authMiddleware