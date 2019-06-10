var express = require('express')
var router = express.Router()
const userService = require('../service/users')

router.get('/', function(req, res, next) {
  return userService.findAll()
    .then((users) => res.send(users))
    .catch((err) => {
      console.log('There was an error querying users', JSON.stringify(err))
      return res.send(err)
    })
})

router.post('/auth', (req, res) => {
  const { email, password } = req.body
  return userService.authenticate({ email, password })
    .then(user => {
      return user
        ? res.status(200).json({
            user: user.user,
            token: user.token
          })
        : res.status(401).json({ message: 'Invalid email or password' })
    })
})

module.exports = router;
