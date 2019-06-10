'use strict';

const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {
       name: 'Administrador',
       email: 'admn@foo.com',
       createdAt: new Date(),
       updatedAt: new Date(),
       password: bcrypt.hashSync('admin', saltRounds)
     },
     {
      name: 'Programador 1',
      email: 'prog1@foo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      password: bcrypt.hashSync('dev1', saltRounds)
     },
     {
      name: 'Programador 2',
      email: 'prog2@foo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      password: bcrypt.hashSync('dev2', saltRounds)
     }
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
