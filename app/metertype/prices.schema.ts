import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Board from '../boards/boards.schema';

export const MeterPrice = sequelize.define(
    'MeterPrice',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        board_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'compositeIndex',
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

export default MeterPrice;

MeterPrice.belongsTo(Board, { foreignKey: 'board_id' });
