import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Meter from '../meters/meters.schema';
import MeterPrice from '../metertype/prices.schema';
import User from '../users/user.schema';

export const Board = sequelize.define(
    'Board',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        base_rate: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        discount: {
            type: DataTypes.DECIMAL,
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

export default Board;

Board.hasMany(User, { foreignKey: 'board_id' });
Board.hasMany(Meter, { foreignKey: 'board_id' });
Board.hasMany(MeterPrice, { foreignKey: 'board_id' });
