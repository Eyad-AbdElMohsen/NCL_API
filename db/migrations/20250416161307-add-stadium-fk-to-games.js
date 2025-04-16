'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('games', 'stadiumId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'stadiums', key: 'id' }
    },
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('games', 'stadiumId')
  }
};
