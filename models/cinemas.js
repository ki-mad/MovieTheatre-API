'use strict';
module.exports = (sequelize, DataTypes) => {
  const cinemas = sequelize.define('cinemas', {
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.BIGINT
  }, {});
  cinemas.associate = function(models) {
    // associations can be defined here
  cinemas.hasMany(models.studio, {
      foreignKey: "cinemas_id",
      as: "cinemasId"
    })
  };
  return cinemas;
};