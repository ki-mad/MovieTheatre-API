"use strict";
module.exports = (sequelize, DataTypes) => {
  const studio = sequelize.define(
    "studio",
    {
      name: DataTypes.STRING,
      cinemas_id: DataTypes.INTEGER,
      capacity: DataTypes.INTEGER
    },
    {}
  );
  studio.associate = function(models) {
    // associations can be defined here
    studio.belongsToMany(models.schedule, {
      through: 'showtime',
      as: 'schedules',
      foreignKey: 'studio_id'
    });

    studio.belongsToMany(models.seat, {
      through: 'studioseat',
      as: 'seats',
      foreignKey: 'studio_id'
    });

    studio.belongsTo(models.cinemas, {
      as: "cinemasId",
      foreignKey: "cinemas_id"
    });

    studio.hasMany(models.ticket, {
      foreignKey: "studio_id",
      as: "tickets"
    })
  };
  return studio;
};
