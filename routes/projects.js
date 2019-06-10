var express = require('express')
var router = express.Router()
const projectService = require('../service/projects')

router.get('/', function(req, res, next) {
  return projectService.findAll()
    .then((projects) => res.send(projects))
    .catch((err) => {
      console.log('There was an error querying users', JSON.stringify(err))
      return res.send(err)
    })
})

module.exports = router;
