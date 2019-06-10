var express = require('express')
var router = express.Router()
const projectService = require('../service/projects')

router.get('/', function(req, res, next) {
  const { role, userId } = req.body
  return role === 'admin'
    ? projectService.findAll()
        .then((projects) => res.status(200).json(projects))
        .catch((err) => {
          console.log('There was an error querying projects', JSON.stringify(err))
          return res.send(err)
        })
    : projectService.findByUser(userId)
        .then((projects) => res.status(200).json(projects))
        .catch((err) => {
          console.log('There was an error querying projects', JSON.stringify(err))
          return res.send(err)
        })
})

module.exports = router;
