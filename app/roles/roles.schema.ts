import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import User from '../users/users.schema';
import { v4 } from 'uuid';

const Role = sequelize.define(
  'Role',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: v4(),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.ENUM(
        'SUPERADMIN',
        'CONSUMER',
        'BOARD_MEMBER',
        'BOARD_ADMIN',
        'SUPERVISOR',
        'FIELD_WORKER'
      ),
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
  },
  {
    timestamps: true,
  }
);

export default Role;