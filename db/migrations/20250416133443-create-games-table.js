'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
     date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hScore: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      aScore: {
          type: Sequelize.INTEGER,
          allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('games')
  }
};
