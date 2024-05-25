'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define('Bill', {
    amount: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    total_amount: DataTypes.FLOAT,
    generated_at: DataTypes.DATE,
    email_sent: DataTypes.BOOLEAN
  }, {});
  Bill.associate = function(models) {
    Bill.belongsTo(models.MeterReading, { foreignKey: 'meterReadingId' });
    Bill.hasMany(models.Ticket, { foreignKey: 'billId' });
  };
  return Bill;
};
