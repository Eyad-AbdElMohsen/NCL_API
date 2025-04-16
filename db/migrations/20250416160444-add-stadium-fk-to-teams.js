'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('teams', 'stadiumId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'stadiums', key: 'id' }
    },
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('teams', 'stadiumId')
  }
};
