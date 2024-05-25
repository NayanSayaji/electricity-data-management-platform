  "use strict";

  /** @type {import('sequelize-cli').Migration} */


  const { UUIDV4 } = require("sequelize");

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Boards", {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
          default: UUIDV4,
        },
        name: {
          type: Sequelize.STRING,
        },
        base_rate_household_regular: {
          type: Sequelize.FLOAT,
        },
        base_rate_household_solar: {
          type: Sequelize.FLOAT,
        },
        base_rate_industrial_regular: {
          type: Sequelize.FLOAT,
        },
        base_rate_industrial_solar: {
          type: Sequelize.FLOAT,
        },
        discount_household_solar: {
          type: Sequelize.FLOAT,
        },
        discount_industrial_solar: {
          type: Sequelize.FLOAT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deletedAt: {
          type: Sequelize.DATE,
        },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Boards");
    },
  };
