"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      name: DataTypes.ENUM(
        "superadmin",
        "supervisor",
        "field_worker",
        "board_admin",
        "board_member",
        "user"
      ),
    },
    {}
  );

  Role.associate = function (models) {
    Role.hasMany(models.User, { foreignKey: "roleId" }); // Role has many Users
  };

  return Role;
};
