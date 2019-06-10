'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    Project.belongsToMany(
      models.User,
      {
        through: 'UserProject',
        foreignKey: 'projectId',
        as: 'users'
      }
    )
  };
  return Project;
};