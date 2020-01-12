'use strict';
module.exports = (sequelize, DataTypes) => {
  const seat = sequelize.define('seat', {
    name: DataTypes.STRING
  }, {});
  seat.associate = function(models) {
    // associations can be defined here
    seat.belongsToMany(models.studio, {
      through: 'studioseat',
      as: 'studios',
      foreignKey: 'seat_id'
    })
  };
  return seat;
};