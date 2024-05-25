'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Boards', [
      {
        id:"a1",
        name: 'Board A',
        base_rate_household_regular: 0.12,
        base_rate_household_solar: 0.10,
        base_rate_industrial_regular: 0.15,
        base_rate_industrial_solar: 0.13,
        discount_household_solar: 0.05,
        discount_industrial_solar: 0.03,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:"a2",
        name: 'Board B',
        base_rate_household_regular: 0.14,
        base_rate_household_solar: 0.11,
        base_rate_industrial_regular: 0.18,
        base_rate_industrial_solar: 0.15,
        discount_household_solar: 0.06,
        discount_industrial_solar: 0.04,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Boards', null, {});
  }
};
