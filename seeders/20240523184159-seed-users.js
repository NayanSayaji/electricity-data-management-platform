'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

const { v4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id:v4(),
        firstname: 'Nayan',
        lastname: 'Sayaji',
        email: 'nayansayaji@gmail.com',
        password: '$2a$05$XCWUluEVDuBaAYmR4rqRN.TQADZ2z1jBvVbU7DMXkzK/03vkOoljG',
        roleId: "509206d6-f1c3-413d-a3f4-8dbbc29e52f5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:v4(),
        firstname: 'Board',
        lastname: 'Admin',
        email: 'boardadmin@gmail.com',
        password: '$2a$05$hcSrgCcR6vJIME4W.q7mb.ma6FsmGmjy.qOYlkA4aI.Qlf7eCMmUq',
        roleId: "7e974bb7-f8ce-4f6d-8d57-70940d12112a", // Assuming board admin role id is 5
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
