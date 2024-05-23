import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Meter from '../meters/meters.schema';

export const Bill = sequelize.define(
    'Bill',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        meter_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        units_consumed: {
            type: DataTypes.DECIMAL,
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
        total_amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        generated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        due_date: {
            type: DataTypes.DATE,
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

export default Bill;

Bill.belongsTo(Meter, { foreignKey: 'meter_id' });
