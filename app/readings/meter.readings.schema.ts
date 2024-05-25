import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Meter from '../meters/meters.schema';
import User from '../users/users.schema';
import Bill from '../bills/bills.schema';

const MeterReading = sequelize.define(
  'MeterReading',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    units_consumed: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('submitted', 'pending_revisit'),
      allowNull: false,
    },
    remarks: {
      type: DataTypes.TEXT,
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
    meterId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fieldWorkerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

export default MeterReading;

// Associations
MeterReading.belongsTo(Meter, { foreignKey: 'meterId' });
MeterReading.belongsTo(User, { foreignKey: 'fieldWorkerId' });
MeterReading.hasOne(Bill, { foreignKey: 'meterReadingId' });
