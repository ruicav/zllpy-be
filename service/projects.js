const db = require('../models')

const projectService = {
  findAll: () => {
    return db.Project.findAll()
  }
}

module.exports = projectService