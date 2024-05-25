import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import MeterReading from '../readings/meter.readings.schema';
import Ticket from '../tickets/tickets.schema';

const Bill = sequelize.define(
  'Bill',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    generated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email_sent: {
      type: DataTypes.BOOLEAN,
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
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

export default Bill;

// Associations
Bill.belongsTo(MeterReading, { foreignKey: 'meterReadingId' });
Bill.hasMany(Ticket, { foreignKey: 'billId' });
