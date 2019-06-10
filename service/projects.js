const models = require('../models')
const { Project, UserProject } = models

const projectService = {
  findAll: () => {
    return Project.findAll()
  },
  findByUser: (userId) => {
    return UserProject.findAll({ where: { userId }})
  }
}

module.exports = projectService