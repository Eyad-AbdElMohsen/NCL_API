'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('players', 'teamId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'teams', key: 'id' }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('players', 'teamId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'teams', key: 'id' }
    });
  }
};
