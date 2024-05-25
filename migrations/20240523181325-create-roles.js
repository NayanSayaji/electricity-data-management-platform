'use strict';

/** @type {import('sequelize-cli').Migration} */

const { UUIDV4 } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Roles', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        default:UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Roles');
  }
};
