'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meter = sequelize.define('Meter', {
    type: DataTypes.ENUM('household_solar', 'household_regular', 'industrial_solar', 'industrial_regular')
  }, {});
  Meter.associate = function(models) {
    Meter.belongsTo(models.User, { foreignKey: 'userId' });
    Meter.belongsTo(models.Board, { foreignKey: 'boardId' });
    Meter.hasMany(models.MeterReading, { foreignKey: 'meterId' });
  };
  return Meter;
};
