'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teams',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        teamName: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        coach: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        stadium: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      }
    )
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('teams')
  }
};
