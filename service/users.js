const db = require('../models')

const userService = {
  findAll: () => {
    return db.User.findAll({ include: ['projects'] })
  }
}

module.exports = userService