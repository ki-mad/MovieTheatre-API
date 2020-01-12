'use strict';
module.exports = (sequelize, DataTypes) => {
  const studioseat = sequelize.define('studioseat', {
    studio_id: DataTypes.INTEGER,
    seat_id: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  studioseat.associate = function(models) {
    // associations can be defined here
  };
  return studioseat;
};