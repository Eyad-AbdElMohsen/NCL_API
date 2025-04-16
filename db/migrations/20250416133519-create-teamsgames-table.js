'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('teamsgames', {
      teamId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
      },
      gameId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
      },
      role: {
          type: Sequelize.ENUM('H', 'A'),
          allowNull: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('teamsgames')
  }
};
