'use strict';

const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {
       name: 'Administrador',
       email: 'admin@foo.com',
       createdAt: new Date(),
       updatedAt: new Date(),
       password: bcrypt.hashSync('admin', saltRounds),
       role: 'admin'
     },
     {
      name: 'Programador 1',
      email: 'prog1@foo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      password: bcrypt.hashSync('dev1', saltRounds),
      role: 'dev'
     },
     {
      name: 'Programador 2',
      email: 'prog2@foo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      password: bcrypt.hashSync('dev2', saltRounds),
      role: 'dev'
     }
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
