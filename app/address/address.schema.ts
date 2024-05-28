import { DataTypes, UUID } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import User from '../users/users.schema';
import Meter from '../meter/meter.schema';

const Address = sequelize.define(
  'Address',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    meterId: {
      type: UUID,
      references: {
        model: Meter,
        key: 'id'
      }
    },
    userId: {
      type: UUID,
      references: {
        model: User,
        key: 'id'
      }
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
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
  },
  {
    timestamps: true,
  }
)

// associations
Address.belongsTo(Meter, {
  foreignKey: "meterId",
  as: 'Address'
})
Meter.hasOne(Address, {
  as: 'Address',
  foreignKey: "meterId"
})


User.hasOne(Address, {
  as: 'Address',
  foreignKey: "userId"
})
Address.belongsTo(User, {
  as: 'Address',
  foreignKey: "userId"
})


export default Address;

