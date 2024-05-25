'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeterReading = sequelize.define('MeterReading', {
    units_consumed: DataTypes.FLOAT,
    photos: DataTypes.JSON,
    timestamp: DataTypes.DATE,
    status: DataTypes.ENUM('submitted', 'pending_revisit'),
    remarks: DataTypes.TEXT
  }, {});
  MeterReading.associate = function(models) {
    MeterReading.belongsTo(models.Meter, { foreignKey: 'meterId' });
    MeterReading.belongsTo(models.User, { foreignKey: 'fieldWorkerId' });
    MeterReading.hasOne(models.Bill, { foreignKey: 'meterReadingId' });
  };
  return MeterReading;
};
