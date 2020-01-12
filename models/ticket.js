'use strict';
module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define('ticket', {
    studio_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  ticket.associate = function(models) {
    // associations can be defined here
    ticket.belongsTo(models.studio, {
      foreignKey: "studio_id",
      as: "studios"
    })
  };
  return ticket;
};