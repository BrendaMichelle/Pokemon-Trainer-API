"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trainers",
      [
        {
          name: "Ash",
          age: 10,
          pokemon: 5,
          createdAt: Sequelize.literal("NOW()"),
          updatedAt: Sequelize.literal("NOW()")
        },
        {
          name: "Misty",
          age: 12,
          pokemon: 10,
          createdAt: Sequelize.literal("NOW()"),
          updatedAt: Sequelize.literal("NOW()")
        },
        {
          name: "Professor Oak",
          age: 30,
          pokemon: 50,
          createdAt: Sequelize.literal("NOW()"),
          updatedAt: Sequelize.literal("NOW()")
        },
        {
          name: "Gary",
          age: 9,
          pokemon: 6,
          createdAt: Sequelize.literal("NOW()"),
          updatedAt: Sequelize.literal("NOW()")
        },
        {
          name: "Brock",
          age: 15,
          pokemon: 4,
          createdAt: Sequelize.literal("NOW()"),
          updatedAt: Sequelize.literal("NOW()")
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trainers", null, {});
  }
};
