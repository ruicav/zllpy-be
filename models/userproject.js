'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('UserProject', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  UserProject.associate = function(models) {
    UserProject.belongsTo(models.User, { foreignKey: 'userId' })
    UserProject.belongsTo(models.Project, { foreignKey: 'projectId' })
  };
  return UserProject;
};