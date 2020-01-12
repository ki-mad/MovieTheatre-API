'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert(
    "showtimes",
    [
      {
        studio_id: "1",
        schedule_id: "2",
        showDate: "2020-01-13",
        showTime: "08:00:00",
        endDate: "2020-01-13",
        endTime: "10:00:00",
        CreatedAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
  );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
