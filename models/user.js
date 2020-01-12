'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    balance: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};