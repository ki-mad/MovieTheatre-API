"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      producer: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      writer: {
        type: Sequelize.STRING
      },
      cast: {
        type: Sequelize.STRING
      },
      distributor: {
        type: Sequelize.STRING
      },
      censorRating: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("movies");
  }
};
