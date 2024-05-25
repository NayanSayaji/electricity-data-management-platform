'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MeterReadings', [
      {
        id:"reading1",
        meterId: "meter1", // Assuming meter id 1 is household_regular
        fieldWorkerId: "user1", // Assuming user id 2 is Super Admin
        units_consumed: 100,
        photos: ['photo1.jpg', 'photo2.jpg'],
        timestamp: new Date(),
        status: 'submitted',
        remarks: 'No remarks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"reading2",
        meterId: "meter2", // Assuming meter id 2 is household_solar
        fieldWorkerId: "user2", // Assuming user id 2 is Super Admin
        units_consumed: 150,
        photos: ['photo3.jpg', 'photo4.jpg'],
        timestamp: new Date(),
        status: 'submitted',
        remarks: 'No remarks',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MeterReadings', null, {});
  }
};
