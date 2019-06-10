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

module.exports = router;
