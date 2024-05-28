import { DataTypes, UUID } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import User from '../users/users.schema';
import Board from '../board/board.schema';
import MeterReading from '../meter-readings/meter.readings.schema';
import { METER_TYPES } from './meter.types';

const Meter = sequelize.define(
  'Meter',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(
        METER_TYPES.HOUSEHOLD_REGULAR,
        METER_TYPES.HOUSEHOLD_SOLAR,
        METER_TYPES.INDUSTRIAL_REGULAR,
        METER_TYPES.INDUSTRIAL_SOLAR,
      ),
      allowNull: false,
    },
    boardId: {
      type: UUID,
      references: {
        model: Board,
        key: "id"
      }
    },
    userId: {
      type: UUID,
      references: {
        model: User,
        key: "id"
      }
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


// Associations
Meter.belongsTo(Board, { foreignKey: 'boardId' });
Board.hasMany(Meter, { foreignKey: 'boardId' });

Meter.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Meter, { foreignKey: 'userId' });

export default Meter;