import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import User from '../users/user.schema';
import Board from '../boards/boards.schema';

export const Meter = sequelize.define(
    'Meter',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        board_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
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
        paranoid: true,
    }
);

export default Meter;

Meter.belongsTo(User, { foreignKey: 'user_id' });
Meter.belongsTo(Board, { foreignKey: 'board_id' });
