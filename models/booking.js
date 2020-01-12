'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    user_id: DataTypes.INTEGER,
    showtime_id: DataTypes.INTEGER,
    dateBooking: DataTypes.DATE,
    seat: DataTypes.STRING,
    statusBooking: DataTypes.STRING
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
  };
  return booking;
};