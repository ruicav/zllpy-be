var express = require('express')
var router = express.Router()
const timekeeperService = require('../service/timekeepers')
const userProjectService = require('../service/userProject')

router.post('/', (req, res) => {
  const { userId } = req.body
  const { userProjectId, workingDate , workingTime } = req.body
  return timekeeperService.isAbleToCreate({ userId, userProjectId })
    .then(isAble => {
      return isAble
        ? timekeeperService.create({ userProjectId, workingDate , workingTime })
            .then(timekeeper => res.status(201).json(timekeeper))
            .catch((err) => {
              console.log('There was an error creating timekeeper', JSON.stringify(err))
              return res.send(err)
            })
        : res.status(401).json({message: 'Invalid credentials'})
    })
})

router.get('/', (req, res) => {
  const { role, userId, projects } = req.body
  return role === 'admin' 
    ? timekeeperService.findAll()
        .then((timekeepers) => {
          return userProjectService.groupHoursWithProjects(timekeepers)
        })
        .then(grouped => {
          return res.status(200).json(grouped)
        })
        .catch((err) => {
          console.log('There was an error querying timekeepers', JSON.stringify(err))
          return res.send(err)
        })
    : timekeeperService.findByUser(userId)
        .then((timekeepers) => {
          return userProjectService.groupHoursWithProjects(timekeepers, userId)
        })
        .then(grouped => {
          return res.status(200).json(grouped)
        })
        .catch((err) => {
          console.log('There was an error querying timekeepers', JSON.stringify(err))
          return res.send(err)
        })
})

module.exports = router