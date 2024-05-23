import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import { v4 as uuidv4 } from "uuid";
import Board from '../boards/boards.schema';
import Role from '../roles/roles.schema';

export const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        firstname: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        board_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        paranoid: true
    }
);

export default User;

User.belongsTo(Role, { foreignKey: 'role_id' });
User.belongsTo(Board, { foreignKey: 'board_id' });
