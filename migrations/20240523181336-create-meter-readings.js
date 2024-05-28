'use strict';

/** @type {import('sequelize-cli').Migration} */

const { UUIDV4, TEXT } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MeterReadings', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        default:UUIDV4
      },
      meterId: {
        type: Sequelize.STRING,
        references: {
          model: 'Meters',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fieldWorkerId: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      units_consumed: {
        type: Sequelize.FLOAT
      },
      photos: {
        type: Sequelize.ARRAY(TEXT)
      },
      timestamp: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('submitted', 'pending_revisit')
      },
      remarks: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('MeterReadings');
  }
};
