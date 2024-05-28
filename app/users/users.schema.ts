import { DataTypes, UUID } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Role from '../roles/roles.schema';
import Board from '../board/board.schema';
import MeterReading from '../meter-readings/meter.readings.schema';
import Ticket from '../tickets/tickets.schema';
import { v4 } from 'uuid';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: v4(),
      primaryKey: true,
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


// Associationss

User.hasOne(Role, { foreignKey: 'roleId' })
User.belongsTo(Role, { foreignKey: 'roleId' });

export default User;