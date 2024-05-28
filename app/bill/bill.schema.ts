import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import MeterReading from '../meter-readings/meter.readings.schema';
import Ticket from '../tickets/tickets.schema';

const Bill = sequelize.define(
  'Bill',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    meterReadingId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: MeterReading,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    total_amount: {
      type: DataTypes.FLOAT,
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


// Associations
Bill.belongsTo(MeterReading, { foreignKey: 'meterReadingId' });
MeterReading.hasOne(Bill, { foreignKey: 'meterReadingId' });

export default Bill;

