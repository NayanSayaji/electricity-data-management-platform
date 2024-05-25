import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';

const Role = sequelize.define(
  'Role',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.ENUM(
        'superadmin',
        'supervisor',
        'field_worker',
        'board_admin',
        'board_member',
        'user'
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
