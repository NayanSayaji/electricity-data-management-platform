'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    issue_description: DataTypes.TEXT,
    status: DataTypes.ENUM('open', 'closed')
  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.User, { foreignKey: 'userId' });
    Ticket.belongsTo(models.Bill, { foreignKey: 'billId' });
    Ticket.belongsTo(models.Board, { foreignKey: 'boardId' });
  };
  return Ticket;
};
