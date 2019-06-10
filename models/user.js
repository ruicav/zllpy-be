'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
    scopes: {
      withPassword: {
        attributes: { include: ['password'] },
      }
    }
  });
  User.associate = function(models) {
    User.belongsToMany(
      models.Project,
      {
        through: 'UserProject',
        foreignKey: 'userId',
        as: 'projects'
      })
  };
  return User;
};