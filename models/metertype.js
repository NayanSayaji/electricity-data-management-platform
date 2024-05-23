'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class metertypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  metertypes.init({
    board_id: DataTypes.STRING,
    type: DataTypes.STRING,
    base_rate: DataTypes.DECIMAL,
    discount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'metertypes',
  });
  return metertypes;
};