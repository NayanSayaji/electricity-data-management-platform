"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Roles",
      [
        {id:"aldsjfalskfjadskljf1",name: "superadmin", createdAt: new Date(), updatedAt: new Date() },
        {id:"aldsjfalskfjadskljf2", name: "supervisor", createdAt: new Date(), updatedAt: new Date() },
        {id:"aldsjfalskfjadskljf3", name: "field_worker", createdAt: new Date(), updatedAt: new Date() },
        {id:"aldsjfalskfjadskljf4", name: "board_admin", createdAt: new Date(), updatedAt: new Date() },
        {id:"aldsjfalskfjadskljf5", name: "board_member", createdAt: new Date(), updatedAt: new Date() },
        {id:"aldsjfalskfjadskljf6", name: "user", createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // Add logic to undo the data insertion
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
