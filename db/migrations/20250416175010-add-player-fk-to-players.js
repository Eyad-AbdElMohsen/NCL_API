'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('players', 'captainId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'players', key: 'id' }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('players', 'captainId')
  }
};
