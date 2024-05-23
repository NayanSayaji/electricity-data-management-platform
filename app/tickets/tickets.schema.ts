import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Meter from '../meters/meters.schema';
import User from '../users/user.schema';

export const Ticket = sequelize.define(
    'Ticket',
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
        meter_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
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

export default Ticket;

Ticket.belongsTo(User, { foreignKey: 'user_id' });
Ticket.belongsTo(Meter, { foreignKey: 'meter_id' });
