import { DataTypes } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import User from '../users/users.schema';
import Bill from '../bills/bills.schema';
import Board from '../boards/boards.schema';

const Ticket = sequelize.define(
  'Ticket',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    issue_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('raised','open', 'closed'),
      defaultValue:'raised',
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

export default Ticket;

// Associations
Ticket.belongsTo(User, { foreignKey: 'userId' });
Ticket.belongsTo(Bill, { foreignKey: 'billId' });
Ticket.belongsTo(Board, { foreignKey: 'boardId' });
