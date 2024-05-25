'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bills', [
      {
        id:"bill1",
        meterReadingId: "reading1", // Assuming meter reading id 1
        amount: 120.00,
        discount: 5.00,
        total_amount: 115.00,
        generated_at: new Date(),
        email_sent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"bill2",
        meterReadingId: "reading2", // Assuming meter reading id 2
        amount: 150.00,
        discount: 7.50,
        total_amount: 142.50,
        generated_at: new Date(),
        email_sent: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bills', null, {});
  }
};
