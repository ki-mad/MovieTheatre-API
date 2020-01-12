'use strict';
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    producer: DataTypes.STRING,
    director: DataTypes.STRING,
    writer: DataTypes.STRING,
    cast: DataTypes.STRING,
    distributor: DataTypes.STRING,
    censorRating: DataTypes.STRING,
    image: DataTypes.STRING,
    trailer: DataTypes.STRING
  }, {});
  movie.associate = function(models) {
    // associations can be defined here
    movie.hasMany(models.schedule, {
      foreignKey: 'movie_id',
      as: 'movies'
    })
  };
  return movie;
};