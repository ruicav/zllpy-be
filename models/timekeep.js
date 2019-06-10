'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timekeep = sequelize.define('Timekeep', {
    userProjectId: DataTypes.INTEGER,
    workingDate: DataTypes.DATE,
    workingTime: DataTypes.INTEGER
  }, {});
  Timekeep.associate = function(models) {
    Timekeep.belongsTo(models.UserProject, 
      {
        foreignKey: 'userProjectId',
        as: 'userProject' 
      })
  };
  return Timekeep;
};