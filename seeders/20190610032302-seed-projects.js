'use strict';

const models = require('../models')
const User = models.User

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Projects', [
      {
        name: 'Projeto Cliente A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Projeto Cliente B',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
      return await queryInterface.bulkInsert('UserProjects', [
        {
          userId: 2,
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          projectId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null, {});
    await queryInterface.bulkDelete('UserProjects', null, {});
  }
};
