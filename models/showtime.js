'use strict';
module.exports = (sequelize, DataTypes) => {
  const showtime = sequelize.define('showtime', {
    studio_id: DataTypes.INTEGER,
    schedule_id: DataTypes.INTEGER,
    showDate: DataTypes.DATE,
    showTime: DataTypes.TIME,
    endDate: DataTypes.DATE,
    endTime: DataTypes.TIME
  }, {});
  showtime.associate = function(models) {
    // associations can be defined here
    showtime.belongsTo(models.studio, {
      foreignKey: 'studio_id',
      as: 'studios'
    });

    showtime.belongsTo(models.schedule, {
      foreignKey: 'schedule_id',
      as: 'schedules'
    })
  };
  return showtime;
};