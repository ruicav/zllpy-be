var express = require('express')
var router = express.Router()
const userService = require('../service/users')

router.post('/', (req, res) => {
  const { email, password } = req.body
  return userService.authenticate({ email, password })
    .then(token => {
      return token
        ? res.status(200).json({
            token
          })
        : res.status(401).json({ message: 'Invalid email or password' })
    })
})

module.exports = router;