import { DataTypes, UUID } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import Meter from '../meter/meter.schema';
import User from '../users/users.schema';
import Bill from '../bill/bill.schema';

const MeterReading = sequelize.define(
  'MeterReading',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    meterId: {
      type: UUID,
      allowNull:false,
      references:{
        model:Meter,
        key:'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    fieldWorkerId: {
      type: UUID,
      allowNull:false,
      references:{
        model:User,
        key:'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
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
      type: DataTypes.ENUM('not_visited', 'pending_revisit', 'submitted'),
      allowNull: false,
      defaultValue:'not_visited'
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
    }
  },
  {
    timestamps: true,
    paranoid: true,
  }
);


// Associations
MeterReading.belongsTo(User, { foreignKey: 'fieldWorkerId' });
User.hasMany(MeterReading, { foreignKey: 'fieldWorkerId' });

MeterReading.belongsTo(Meter, { foreignKey: 'meterId' });
Meter.hasMany(MeterReading, { foreignKey: 'meterId' });

export default MeterReading;