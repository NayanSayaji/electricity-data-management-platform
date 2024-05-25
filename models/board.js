'use strict';
module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define('Board', {
    name: DataTypes.STRING,
    base_rate_household_regular: DataTypes.FLOAT,
    base_rate_household_solar: DataTypes.FLOAT,
    base_rate_industrial_regular: DataTypes.FLOAT,
    base_rate_industrial_solar: DataTypes.FLOAT,
    discount_household_solar: DataTypes.FLOAT,
    discount_industrial_solar: DataTypes.FLOAT
  }, {});
  Board.associate = function(models) {
    Board.hasMany(models.User, { foreignKey: 'boardId' });
    Board.hasMany(models.Meter, { foreignKey: 'boardId' });
    Board.hasMany(models.Ticket, { foreignKey: 'boardId' }); // Board has many Tickets
  };
  return Board;
};
