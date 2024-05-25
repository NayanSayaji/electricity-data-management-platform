'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id:"user1",
        username: 'SuperAdmin',
        firstname: 'Super',
        lastname: 'Admin',
        email: 'superadmin@example.com',
        password: 'hashedpassword',
        roleId: "aldsjfalskfjadskljf4", // Assuming superadmin role id is 1
        boardId: "a2", // Assuming Board A id is 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"user2",
        username: 'Board Admin',
        firstname: 'Board Admin',
        lastname: 'Board Admin',
        email: 'boardadmin@example.com',
        password: 'hashedpassword',
        roleId: "aldsjfalskfjadskljf2", // Assuming board admin role id is 5
        boardId: "a2", // Assuming Board A id is 1
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
