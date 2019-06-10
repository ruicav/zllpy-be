'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {
       name: 'Administrador',
       email: 'admn@foo.com',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Programador 1',
      email: 'prog1@foo.com',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Programador 2',
      email: 'prog2@foo.com',
      createdAt: new Date(),
      updatedAt: new Date()
     }
   ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
