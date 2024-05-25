'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
      {
        id:"ticket1",
        userId: "user1", // Assuming user id 2 is Super Admin
        billId: "bill1", // Assuming bill id 1
        issue_description: 'Issue description 1',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"ticket2",
        userId: "user2", // Assuming user id 2 is Super Admin
        billId: "bill2", // Assuming bill id 2
        issue_description: 'Issue description 2',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
