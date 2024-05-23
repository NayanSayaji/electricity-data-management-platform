'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MeterReadings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn('uuid_generate_v4')
      },
      meter_id: {
        type: Sequelize.INTEGER
      },
      field_worker_id: {
        type: Sequelize.INTEGER
      },
      units_consumed: {
        type: Sequelize.DECIMAL
      },
      reading_date: {
        type: Sequelize.DATE
      },
      photos: {
        type: Sequelize.JSON
      },
      revisit: {
        type: Sequelize.BOOLEAN
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MeterReadings');
  }
};