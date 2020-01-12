'use strict';
module.exports = (sequelize, DataTypes) => {
  const schedule = sequelize.define('schedule', {
    movie_id: DataTypes.INTEGER,
  }, {});
  schedule.associate = function(models) {
    // associations can be defined here
    schedule.belongsToMany(models.studio, {
      through: 'showtime',
      as: 'studios',
      foreignKey: 'schedule_id'
    })

    schedule.belongsTo(models.movie, {
      foreignKey: 'movie_id',
      as : 'movies'
    })
  };
  return schedule;
};