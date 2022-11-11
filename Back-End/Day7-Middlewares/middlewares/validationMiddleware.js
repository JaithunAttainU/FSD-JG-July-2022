const userValidation = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).send({ status: 'error', msg: 'Invalid Input' })
  } else {
    next()
  }
}

const postsValidation = (req, res, next) => {
  const { body, title } = req.body

  if (!body || !title) {
    res.status(400).send({ status: 'error', msg: 'Invalid Input' })
  } else {
    next()
  }
}

module.exports = {
  userValidation,
  postsValidation
}