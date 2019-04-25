"use strict";
module.exports = (sequelize, DataTypes) => {
  const trainer = sequelize.define(
    "trainer",
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      pokemon: DataTypes.INTEGER
    },
    {}
  );
  trainer.associate = function (models) {
  };
  return trainer;
};
