"use strict";

/** @type {import('sequelize-cli').Migration} */

const { UUIDV4 } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tickets", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        default: UUIDV4,
      },
      userId: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      billId: {
        type: Sequelize.STRING,
        references: {
          model: "Bills",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      boardId: {
        type: Sequelize.STRING,
        references: {
          model: "Boards",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      issue_description: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.ENUM("open", "closed"),
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
    await queryInterface.dropTable("Tickets");
  },
};
