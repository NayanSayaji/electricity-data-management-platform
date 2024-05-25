'use strict';

/** @type {import('sequelize-cli').Migration} */

const { UUIDV4 } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bills', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        default:UUIDV4
      },
      meterReadingId: {
        type: Sequelize.STRING,
        references: {
          model: 'MeterReadings',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      amount: {
        type: Sequelize.FLOAT
      },
      discount: {
        type: Sequelize.FLOAT
      },
      total_amount: {
        type: Sequelize.FLOAT
      },
      generated_at: {
        type: Sequelize.DATE
      },
      email_sent: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Bills');
  }
};
