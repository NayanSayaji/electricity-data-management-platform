import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import { v4 as uuidv4 } from 'uuid';
import User from '../users/user.schema';

const Role = sequelize.define(
  'Role',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
      allowNull: false,
    },
    roleName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }
);

// Associations
Role.hasMany(User, { foreignKey: 'roleId' });

export default Role;


