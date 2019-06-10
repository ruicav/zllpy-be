const models = require('../models')
const Timekeep = models.Timekeep

const timekeepService = {
  create: ({ userProjectId, workingDate , workingTime }) => {
    return Timekeep.create({ userProjectId: userProjectId, workingDate: workingDate , workingTime: workingTime })
  },
  findAll: () => Timekeep.findAll()
}

module.exports = timekeepService