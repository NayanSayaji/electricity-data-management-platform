'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meters', [
      {
        id:"meter1",
        type: 'household_regular',
        userId: "user1", // Assuming user id 2 is Super Admin
        boardId: "a1", // Assuming Board A id is 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"meter2",
        type: 'household_solar',
        userId: "user2", // Assuming user id 2 is Super Admin
        boardId: "a2", // Assuming Board A id is 1
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meters', null, {});
  }
};
