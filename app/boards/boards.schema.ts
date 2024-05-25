import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import { v4 as uuidv4 } from 'uuid';
import User from '../users/users.schema';
import Meter from '../meters/meters.schema';
import Ticket from '../tickets/tickets.schema';

export const Board = sequelize.define(
  'Board',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_rate_household_regular: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    base_rate_household_solar: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    base_rate_industrial_regular: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    base_rate_industrial_solar: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount_household_solar: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount_industrial_solar: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

export default Board;

// Associations
Board.hasMany(User, { foreignKey: 'boardId' });
Board.hasMany(Meter, { foreignKey: 'boardId' });
Board.hasMany(Ticket, { foreignKey: 'boardId' });
