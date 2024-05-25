import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import User from '../users/users.schema';
import Board from '../boards/boards.schema';
import MeterReading from '../readings/meter.readings.schema';

const Meter = sequelize.define(
  'Meter',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('household_solar', 'household_regular', 'industrial_solar', 'industrial_regular'),
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

export default Meter;

// Associations
Meter.belongsTo(User, { foreignKey: 'userId' });
Meter.belongsTo(Board, { foreignKey: 'boardId' });
Meter.hasMany(MeterReading, { foreignKey: 'meterId' });
