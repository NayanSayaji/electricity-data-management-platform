'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  bills.init({
    meter_id: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    units_consumed: DataTypes.DECIMAL,
    base_rate: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL,
    total_amount: DataTypes.DECIMAL,
    generated_at: DataTypes.DATE,
    due_date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bills',
  });
  return bills;
};