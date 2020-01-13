'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('showtimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studio_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'studios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      schedule_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'schedules',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      showDate: {
        type: Sequelize.DATE
      },
      showTimes: {
        type: Sequelize.TIME
      },
      endDate: {
        type: Sequelize.DATE
      },
      endTimes: {
        type: Sequelize.TIME
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
    return queryInterface.dropTable('showtimes');
  }
};