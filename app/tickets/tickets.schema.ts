import { DataTypes, UUID } from 'sequelize';
import { sequelize } from '../connections/sequelize.global.instance';
import User from '../users/users.schema';
import Bill from '../bill/bill.schema';
import Board from '../board/board.schema';

const Ticket = sequelize.define(
  'Ticket',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type:UUID,
      references:{
        model:User,
        key:"id"
      }
    },
    issue_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('raised', 'open', 'closed'),
      defaultValue: 'raised',
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

Ticket.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Ticket, { foreignKey: 'userId' });

Ticket.belongsTo(Bill, { foreignKey: 'billId' });
Bill.hasMany(Ticket, { foreignKey: 'billId' });

Ticket.belongsTo(Board, { foreignKey: 'boardId' });
Board.hasMany(Ticket, { foreignKey: 'boardId' });
