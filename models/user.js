"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.belongsTo(models.Role, { foreignKey: "roleId" }); // User belongs to a Role
    User.belongsTo(models.Board, { foreignKey: "boardId" });
    User.hasMany(models.Meter, { foreignKey: "userId" });
    User.hasMany(models.MeterReading, { foreignKey: "fieldWorkerId" });
    User.hasMany(models.Ticket, { foreignKey: "userId" });
  };
  return User;
};
