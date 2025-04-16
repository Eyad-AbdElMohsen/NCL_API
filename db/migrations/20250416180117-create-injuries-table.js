'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('injuries', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      period: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      playerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'players', key: 'id' }
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('injuries')
  }
};
