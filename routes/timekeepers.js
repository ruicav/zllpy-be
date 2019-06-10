var express = require('express')
var router = express.Router()
const timekeeperService = require('../service/timekeepers')

router.post('/', (req, res) => {
  const { userProjectId, workingDate , workingTime } = req.body
  return timekeeperService.create({ userProjectId, workingDate , workingTime })
    .then(timekeeper => res.status(201).json(timekeeper))
    .catch((err) => {
      console.log('There was an error creating timekeeper', JSON.stringify(err))
      return res.send(err)
    })
})

router.get('/', (req, res) => {
  return timekeeperService.findAll()
    .then((timekeepers) => res.send(timekeepers))
    .catch((err) => {
      console.log('There was an error querying timekeepers', JSON.stringify(err))
      return res.send(err)
    })
})

module.exports = router