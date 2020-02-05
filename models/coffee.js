'use strict';
module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING
  }, {});
  Coffee.associate = function(models) {
    // associations can be defined here
  };
  return Coffee;
};