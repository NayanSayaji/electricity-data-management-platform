import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import { v4 as uuidv4 } from "uuid"

export const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: uuidv4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'customer',
            allowNull: false,
        },
    },
    {
        timestamps: true,
        paranoid: true
    }
)


export default User;

