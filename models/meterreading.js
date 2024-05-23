'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meterreadings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meterreadings.init({
    meter_id: DataTypes.STRING,
    field_worker_id: DataTypes.STRING,
    units_consumed: DataTypes.DECIMAL,
    reading_date: DataTypes.DATE,
    photos: DataTypes.JSON,
    revisit: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'meterreadings',
  });
  return meterreadings;
};