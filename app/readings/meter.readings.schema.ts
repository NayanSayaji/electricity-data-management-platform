import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Meter from '../meters/meters.schema';
import User from '../users/user.schema';

export const MeterReading = sequelize.define(
    'MeterReading',
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
        field_worker_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        units_consumed: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        reading_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        photos: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        revisit: {
            type: DataTypes.BOOLEAN,
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

export default MeterReading;

MeterReading.belongsTo(Meter, { foreignKey: 'meter_id' });
MeterReading.belongsTo(User, { foreignKey: 'field_worker_id' });
