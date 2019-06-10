var express = require('express')
var router = express.Router()
const userService = require('../service/users')

router.get('/', function(req, res, next) {
  const { role } = req.body
  return role === 'admin'
    ? userService.findAll()
        .then((users) => res.status(200).json(users))
        .catch((err) => {
          console.log('There was an error querying users', JSON.stringify(err))
          return res.send(err)
        })
    : res.status(401).json({message: 'Invalid credentials'})
})

module.exports = router;
