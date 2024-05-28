"use strict";

const { v4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: v4(),
          name: "SUPERADMIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: v4(),
          name: "SUPERVISOR",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: v4(),
          name: "FIELD_WORKER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: v4(),
          name: "BOARD_ADMIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: v4(),
          name: "BOARD_MEMBER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: v4(),
          name: "CONSUMER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // Add logic to undo the data insertion
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
