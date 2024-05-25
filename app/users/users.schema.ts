import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Role from '../roles/roles.schema';
import Board from '../boards/boards.schema';
import Meter from '../meters/meters.schema';
import MeterReading from '../readings/meter.readings.schema';
import Ticket from '../tickets/tickets.schema';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    roleId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Role,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    boardId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: Board,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
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

export default User;

// Associations
User.belongsTo(Role, { foreignKey: 'roleId' });
User.belongsTo(Board, { foreignKey: 'boardId' });
User.hasMany(Meter, { foreignKey: 'userId' });
User.hasMany(MeterReading, { foreignKey: 'fieldWorkerId' });
User.hasMany(Ticket, { foreignKey: 'userId' });
