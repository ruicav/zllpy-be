const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const db = require('../models')
const { User } = db

const SECRET = 'segredim'

const generateToken = (user) => {
  return jwt.sign({id: user.id}, SECRET, { expiresIn: '1h' });
}

const userService = {
  findAll: () => User.findAll({ include: ['projects'] }),
  authenticate: ({ email, password }) => {
    return User.findOne({ where: {email}, include: ['projects'] })
      .then(user => {
        return user && bcrypt.compareSync(password, user.password)
          ? { user, token: generateToken(user)}
          : null
      })
  }
}

module.exports = userService