'use strict';

/** @type {import('sequelize-cli').Migration} */

const { UUIDV4 } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Meters', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        default:UUIDV4
      },
      type: {
        type: Sequelize.ENUM('household_solar', 'household_regular', 'industrial_solar', 'industrial_regular')
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      boardId: {
        type: Sequelize.STRING,
        references: {
          model: 'Boards',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Meters');
  }
};
